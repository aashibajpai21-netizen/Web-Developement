 export const LoginUser =(req,res) => {
    res.json({message: "Login Successful from Controller"});
}

 export const LogoutUser =(req,res) => {
    res.json({message: "Logout Successful from Controller"});
}

export const RegisterUser =(req,res) => {
    try{
        const{ fullName, email,password, phone, gender, dob}= req.body;

        if(!fullName || !email || !password || !phone || ! gender || !dob )
        {
            res.status(400).json( {message: "All Feilds Required"});
            return;
        }
    }
    const existingUser = await User.findOne({email});
    if (existingUser){
        res.status(409).json({ message : "Email Already Registered"});
        return;
    }
};
 
