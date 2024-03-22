var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
  let year = 2024;
  let university = "Greenwich";

  res.render('index',{year, university});
})

router.get('/demo', (req, res)=> {
  res.render('demo', {hn: "Ha Noi", vn: "Viet Nam"});
})
module.exports = router;
