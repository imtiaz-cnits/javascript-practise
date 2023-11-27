const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => 
console.log('Database is Connected')).catch((err) => console.error(err));

// Schema (Shape of a Document)
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String
});

const User = mongoose.model('User', userSchema);

// Problem Solving
// Find those users whose age is greater then 40 or they are unmarried
// Find only name
// Sort them by name

async function query(){
    const users = await User.findByIdAndUpdate('6027d1fd8d4a543a2049d1a0' ,
        { age: 35, isMarried: false } , { new: true, runValidators: true }
    );
    

    console.log(users);
}

query();


// async function storeInformation(){
//     const user = new User({
//         name: 'Imtiaz Ahmed',
//         age: 27,
//         isMarried: true,
//         salary: 40000,
//         gender: 'Male'
//     });
//     await user.save();
//     console.log(user);
// }

// storeInformation();


