const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');

exports.register = async (req, res) => {
  const {password} = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    let obj = User (req.body) ;
    obj.password = hashedPassword;
    if(req.file){
      const path = req.file.destination;
      let portion = path.substring(path.indexOf('cvUplodes'));
      portion +='/'+req.file.filename
      obj.cv = portion;
    }
    await obj.save();
    res.status(201).json({ message: 'User created successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    var user = await Admin.findOne({ email });
    if (!user){
    user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }}
    if (user.valid == false) {
      return res.status(401).json({ message: 'account in progress' });
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    //res.setHeader('Refresh-Token', refreshToken); it will be sent with httpOnly cookie 
    res.status(200).json({ message: 'Login successful',payload : user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};





// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
//     if (user.valid ==false) {
//       return res.status(401).json({ message:  });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }else{
//       res.status(200).json({ message: 'Login successful', payload : user});
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };




