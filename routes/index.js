const express=require('express');

const router=express.Router();
const controller=require('../controllers/controller_module');
router.get('/',controller.boot);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
module.exports=router;