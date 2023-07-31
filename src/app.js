const path = require('path');
const getWeather = require('./utlis/weather')
const express = require('express')
const app = express()
const hbs = require('hbs');
const { log } = require('console');


const publicPath = path.join(__dirname,'../public')
const partialsPath = path.join(__dirname,'./partials')



app.use(express.static(publicPath))
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
  res.render('index',{name:'mohammad',age:22})
})
  
app.get('/help',(req,res)=>{
  res.render('help',{name:'mohammad',age:22})
})
  


app.get('/weather',function(req,res){
 if(!req.query.search){
  return res.send({error:'enter a valid search'})
 }
    
    getWeather(req.query.search,(err,response)=>{
     
      if(err || response.body.success === false ){
        res.send({error:'error happend'})
      }else{
        res.send({data:response.body.current})
        console.log(response.body);
      }
      
    })
   
})

app.get('*',(req,res)=>{
  res.render('404')
})
  app.listen(3000,()=>{
    console.log('server start');
  })