var {searchTweets} = require('../helpers/utils')

module.exports =  function(app){

app.get('/mutual',(req,res)=>{
    console.log("request params",req.params,req.headers)
    try{
    let params = {
        cursor: (req.headers.cursor && Number(req.headers.cursor)) || -1,
        screen_name: req.headers.screen_name,
        skip_status: (req.headers.skip_status === 'true'),
        include_user_entities: (req.headers.skip_status === 'false'),
        count: Number(req.headers.count) || 20,
        lang: req.headers.lang || 'en'
      }
    searchTweets(res,params)
    }catch(err){
        res.send({'status': 500, 'msg': ` invalid details ${err}`})
    }
})
}
