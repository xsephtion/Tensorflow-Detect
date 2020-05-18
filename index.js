
// UNSUPPORTED. 
// Bugged changed to HTML version

//const tf = require('@tensorflow/tfjs')
//const tfjs = require('@tensorflow/tfjs-node')
//const cocoSsd = require('@tensorflow-models/coco-ssd');
var express = require('express'),
  app = express(),
  host = process.env.HOST || '0.0.0.0',
  port = process.env.PORT || 5050,
  BodyParser = require("body-parser");

// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.get('/', function(req, res){
    res.sendFile('view/index.html' , { root: __dirname });
})

// app.post('/send', upload.single('image'), async function(req, res){
//     var img = req.file
//     try{
//         const model = await cocoSsd.load();
//         // Classify the image.
//         const predictions = await model.detect(imgs_html); // bugged
//         console.log('Predictions: ');
//         console.log(predictions);
//         res.status(200).send(predictions)
//     }catch(err){
//         res.status(500).send(err);
//     }
// });

app.listen(port)
console.log('Server started on: ' + port);