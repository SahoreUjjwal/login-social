const User = require('../models/user');

module.exports.login = async function(req, res){
    
    try{
       // console.log("home posts",posts[0].comments);
        return res.render('user_signIn', {
            title: "Sign In",
        });
    }
    catch(err){
        console.log("Error fetching entries form Post collection: ",err);
        return res.redirect('back');
    }
    
    
}

module.exports.loggedIn = async function(req, res){
    if(req.user)
    {
        return res.render('logged_in', {
            title: "logged in",
        });
    }
    else{
        return res.redirect('/user/login'); 
    }

}

module.exports.signUp = async function(req, res){
    
    try{
       // console.log("home posts",posts[0].comments);
        return res.render('user_signUp', {
            title: "Sign Up",
        });
    }
    catch(err){
        console.log("Error fetching entries form Post collection: ",err);
        return res.redirect('back');
    }
    
    
}

module.exports.create =async function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    try{
        if (req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
        const user =  await User.findOne({email: req.body.email});
  	    if (!user){
            await User.create(req.body);
		    return res.redirect('/user/login');
        }else{
            return res.redirect('/user/logged-in');
        }   
    }
    catch(err){
	    return res.redirect('back');
    }
}
module.exports.signOut=async function(req,res){

    req.logout(function(err) {
        if (err) { 
            return res.redirect('back');
        }
       
        return res.redirect('/user/login');
      });
}

module.exports.createSession = function(req, res){
        return res.redirect('/user/logged-in');
}