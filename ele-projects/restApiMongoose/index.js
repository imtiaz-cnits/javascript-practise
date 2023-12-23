const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task').then(() => console.log('Database is Connected...')).catch((err) => console.error(err));

const User = require('./model/user');
const Task = require('./model/task');

