import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js"
import bcrypt from "bcryptjs"
// import 'dotenv/config';
import { ENV } from "../lib/env.js";


export const signup = async (req,res) => {
    const {fullName, email, password} = req.body;

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be atlast 6 charecters"})
        }

        // check valid emails: regax
        const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegax.test(email)){
            return res.status(400).json({message: "Invalid email format"})
        }

        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: "Email already exists"});
        
        //password hashing 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        }) 

        if (newUser) {

            const savedUser = await newUser.save();
            generateToken(newUser._id, res);


            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email : newUser.email,
                profilePic: newUser.profilePic,
            })

            try {
                await sendWelcomeEmail(savedUser.email, savedUser.fullName, ENV.CLIENT_URL);
            } catch (error) {
                
            }

        } else {
            res.status(400).json({ message: "Invalid user data"})
        }
        
    } catch (error) {
        console.log("Error in signup controller:", error);
        res.status(500).json({message: "Internal server error"});
    }
}