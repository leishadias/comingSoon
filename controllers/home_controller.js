module.exports.home = async function(req, res){
    try{
        return res.render('home', {
            title:"Coming soon!"
            });
    }catch(err){
        console.log('error', err);
        return res.redirect('back');
    }
};