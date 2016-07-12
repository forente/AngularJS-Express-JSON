var router = require('express').Router();

var boxing  = [{  Name: 'John Doe',  Origin: 'New York, NY'}];


// test routes
router.get('/', function(request,responce){
  responce.send("sports");
});

router.get('/boxing', function(request,responce){
  responce.send(boxing[0].Name);
});

router.get('/judo', function(request,responce){
  responce.send("judo");
});

router.get('/fencing', function(request,responce){
  responce.send("fencing");
});

router.get('/taekwondo', function(request,responce){
  responce.send("taekwondo");
});

router.get('/wrestling', function(request,responce){
  responce.send("wrestling");
});



module.exports= router;
