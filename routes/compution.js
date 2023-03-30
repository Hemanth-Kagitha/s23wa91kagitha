var express = require('express');
var router = express.Router();

let x;
let y;
router.get('/', function(req, res, next) {
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());

let o4=Math.pow(x,y); 
let o1=Math.imul(x,y);
let o2=Math.log(y,x);
let o3=Math.log10(y);
  res.send('Math.pow() applied to '+x+' and '+y+' is ' +o4+'<br>Math.imul() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.log() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.log10()  applied to '+y+' is'+o3); 
}
else{

  x = req.query.x;

  let o4=Math.pow=(x,y);
  let o1=Math.imul(x,y);
  let o2=Math.log(y,x);
  let o3=Math.log10(y);

  res.send('Math.pow() applied to '+x+' and '+y+' is ' +o4+'<br>Math.imul() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.log() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.log10()  applied to '+y+' is'+o3); 
}
});

module.exports = router;