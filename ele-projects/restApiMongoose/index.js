const mongoose = require('mongoose');
const colors = require('colors');
mongoose.connect('mongodb://127.0.0.1:27017/task').then(() => console.log('Database is Connected...')).catch((err) => console.error(err));

const User = require('./model/user');
const Task = require('./model/task');

async function db() {
    try {
        const user = new User ({
            name: 'Ia',
            age: 28,
            email: 'imtiaz@email.com',
            password: '12345'
        });
        await user.save();
        console.log(user);
    }
    catch(e) {
        console.log(colors.red.underline.bold(e.message));
    }
}
db();