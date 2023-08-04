const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test').then(() => console.log('Database is connected')).catch((err) => console.error(err));


// Schema (Shape of a Document) 
 
const userSchema = new mongoose.Schema({
     name: String,
     age: Number,
     isMarried: Boolean,
     salary: Number,
     gender: String,
})

const User = mongoose.model('User',userSchema);  

async function db(){
     await User.findByIdAndDelete('6027d22c7dd46d17c04bdf90');
     }
     
     db();




// async function fetchInformation(){
//      const users = await User.find({ salary: { $in: [25000,40000,45000 ] } });
//      console.log(users);
// }

// fetchInformation();

 


// async function storeInformation(){
//      const user = new User({
//           name: 'Ariyan',
//           age: 40,
//           isMarried: false,
//           salary: 80000,
//           gender: 'Male',
//      });
//    await user.save();
//    console.log(user);

// }

// storeInformation();





