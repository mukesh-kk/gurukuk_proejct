const user = require('../models/UserModel');

const CreateUser = async (req, res) => {


    const { name, email, password } = req.body;
    try {
        if (!(name && email && password)) {
            res.status(400).send('name,email,password are required');
        } else {
            const existingUser = await user.findOne({ email });

            if (existingUser) {
              return res.status(400).json({ error: 'Email already used ' });
            }
        
            const newuser = await user.create(req.body);
            console.log(newuser)
            const toSend = { ...newuser.toObject() }
            delete toSend.password;
            res.status(200).json({ message: 'Successfully created User', user: toSend })

        }
    } catch (err) {

        res.status(400).send('something went wrong')
    }

}
const LoginUser = async (req, res) => {


    const { email, password } = req.body;
    try {
        if (!email && !password) {
            res.status(400).send('email,password are required');
        } else {
            const newuser = await user.find({ email: email, });

            if (newuser && newuser.length && newuser[0].password == password) {
                const toSend = { ...newuser[0].toObject() } // Create a copy of the user object
                delete toSend.password;
                res.status(200).json({ message: 'Successfully login', user: toSend })
            }
            else {
                res.send('User Not found')
            }

        }
    } catch (err) {
        console.log(err)
        res.send('something went wrong')
    }

}
const UpdateUser = async (req, res) => {
    const userId = req.params.id; // Assuming you pass the user ID as a parameter in the request

    try {
        const updatedUser = await user.findByIdAndUpdate(userId, req.body, { new: true });

        if (updatedUser) {
            const toSend = { ...updatedUser.toObject() };
            delete toSend.password;
            res.status(200).json({ message: 'Successfully updated User', user: toSend });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
};

const DeleteUser = async (req, res) => {
    const userId = req.params.id; // Assuming you pass the user ID as a parameter in the request

    try {
        const deletedUser = await user.findByIdAndDelete(userId);

        if (deletedUser) {
            const toSend = { ...deletedUser.toObject() };
            delete toSend.password;
            res.status(200).json({ message: 'Successfully deleted User', user: toSend });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
};
const GetUser = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const userfound = await user.findById(userId);
  
      if (!userfound) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({user: userfound });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };    

  const GetAllUsers = async (req, res) => {
    try {
      const users = await user.find();
  
      return res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  module.exports = { CreateUser, LoginUser ,UpdateUser, DeleteUser,GetAllUsers,GetUser}
