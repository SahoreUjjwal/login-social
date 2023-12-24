

module.exports.home = async function(req, res){
    
    try{
       // console.log("home posts",posts[0].comments);
        return res.render('home', {
            title: "Home",
        });
    }
    catch(err){
        console.log("Error fetching entries form Post collection: ",err);
        return res.redirect('back');
    }
    
    
}