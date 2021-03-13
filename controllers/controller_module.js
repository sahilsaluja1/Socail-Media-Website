const Post=require('../models/post');
module.exports.boot=function(req,res){

    Post.find({}).populate('user').exec(function(err,posts){

        return res.render('home',{
            title:"home",
            posts:posts
        });
    });
}