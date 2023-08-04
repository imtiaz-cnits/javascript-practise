const express = require('express');
const router = express.Router();

const {
     storeTask,
     fetchAllTask,
     getSingleTask,
     updateTask,
} = require('../controller/task');  

router.post('/task', storeTask)  
router.get('/task', fetchAllTask); 
router.get('/task/:id', getSingleTask); 
router.delete('/task/:id', updateTask);

module.exports = router;