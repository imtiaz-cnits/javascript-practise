const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/task').then(() => console.log('Database is Connected...')).catch((err) => console.error(err));

const User = require('./model/user');
const Task = require('./model/task');

const port = process.port.env || 4040;
app.listen(port, () => console.log(`Server is running at port ${port}`));

async function db() {
    try {
        // const user = new User ({
        //     name: 'Ia',
        //     age: 28,
        //     email: 'imtiaz@email.com',
        //     password: '12345'
        // });
        // await user.save();
        // console.log(user);

        const task = new Task ({
            description: 'This is task 01',
            isCompleted: true
        });
        await task.save();
        console.log(task);
    }
    catch(e) {
        console.log(colors.red.underline.bold(e.message));
    }
}
db();