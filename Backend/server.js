var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://Admin1:Student1@ds115094.mlab.com:15094/studb';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name: String,
    college: String,
    course: String,
    year: String
})
var StudentModel = mongoose.model('students', studentSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    app.get('/', function (req, res) {
        res.send('Hello from Express');
     })

     app.students('/api/students', function(req, res){
        console.log("student successful");
        console.log(req.body.name);
            console.log(req.body.college);
            console.log(req.body.course);
            console.log(req.body.year);
    
        StudentModel.create({
            name: req.body.name,
            college: req.body.college,
            course: req.body.course,
            year: req.body.year
        });
        res.send('Item added');

        app.get('/api/students', function(req, res){
            StudentModel.find(function(err, data){
                res.json(data);
            });
        })

        app.get('/api/students/:id', function(req, res){
            console.log("Read student " +req.params.id);
        
            //StudentModel.find({_id : req.params.id}, 
            StudentModel.findById(req.params.id,
                function (err, data) {
                    res.json(data);
                });
        })

        app.put('/api/students/:id', function(req, res){
            console.log("Update Student" +req.params.id);
            console.log(req.body.name);
            console.log(req.body.college);
            console.log(req.body.course);
            console.log(req.body.year);
        
            StudentModel.findByIdAndUpdate(req.params.id, req.body, 
                function(err, data){
                    res.send(data);
                })
        })

        app.delete('/api/students/:id', function(req, res){
            console.log(req.params.id);
        
            StudentModel.deleteOne({_id:req.params.id},
            function(err, data)
            {
                if(err)
                    res.send(err);
                res.send(data);
            })
        })
        
        
        var server = app.listen(8081, function () {
           var host = server.address().address
           var port = server.address().port
           
           console.log("Example app listening at http://%s:%s", host, port)
    
        })
    })