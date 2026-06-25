import User from "../models/user.model.js";
export const RegisterUser = async (req, res) => {
  try {

      console.log(0);
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    console.log(1);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
      return;
    }
      console.log(2);

    const photourl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

      console.log(3);
    const photo = {
      url: photourl,
      publicId: null,
    };

      console.log(4);
    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    console.log(newUser);
      console.log(5);
    res.status(201).json({message: "User Created Successfully"})
  }
   catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const LoginUser = (req, res) => {
  res.json({ message: "Login Successful from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successful from Controller" });
};
