var config = require('../config/config');
var Twitter = require('twitter');
var T = new Twitter(config);

exports.searchTweets = (res,params)=>{
T.get('friends/list.json', params, function(err, data, response) {
    if(!err && response && response.body){
        res.send({'status':200,'data':JSON.parse(response.body)});
    } else {
        console.log(err);
        res.send({'status':500,'msg':err});
    }
 })
}