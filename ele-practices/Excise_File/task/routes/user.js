const express = require('express');
const router = express.Router();

const {
     createUser,
     getAllUser,
     getSingleUser,
     updateUser,
     deleteUser,
     login,
} = require('../controller/user');

router.post('/user', createUser ); 
router.post('/user/login', login );
router.get('/user', getAllUser); 
router.get('/user/:id', getSingleUser); 
router.patch('/user/:id', updateUser); 
router.delete('/user/:id' , deleteUser);

module.exports = router;