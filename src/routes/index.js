var routes = require('./twitterFetch');
module.exports  =  function(app){
app.get('/',(req,res)=>{
    res.send({msg:'hello! Sever is up and running'})
})
routes(app);

app.all('*',(req,res)=>{
    res.status(404).send({msg: 'not found'})
})
}
