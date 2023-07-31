const { response } = require('express');
const request = require('postman-request');
const getWeather = function(data,callback){
   const url=`http://api.weatherstack.com/current?access_key=1087f07545f3e5660102edb74884e2ed&query=${data}`
    request({url:url,json:true},(error,response)=>{
      
      
    
       callback(undefined,response)
    })

}



module.exports=getWeather;

