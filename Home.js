const express=require('express');
const app=express();
const aws=require('aws-sdk');
// const rout=require('./controller');
const fs=require('fs');
var bodyParser = require('body-parser');
const dynamo=require('dynamodb');

const uuid1g=require('uuid')

const port =3000;





app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

aws.config.update({
    region:'local',
    endpoint:'http://localhost:8000'
});
const dynamodb = new aws.DynamoDB();


var docClient = new aws.DynamoDB.DocumentClient();
// let params = {
//     TableName: "Student",
//         KeySchema: [
//             {AttributeName: "Masv", KeyType: "HASH"},
//             {AttributeName: "Ten", KeyType: "RANGE"}
//         ],
//         AttributeDefinitions: [
//             {AttributeName: "Masv", AttributeType: "S"},
//             {AttributeName: "Ten", AttributeType: "S"}
//         ],
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 10,
//             WriteCapacityUnits: 10
//         }
// };
// dynamodb.createTable(params, (err, data) => {
//     if(err){
//          console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
//     }else{
//               console.log(`Created table ${JSON.stringify(data, null, 2)}`);
//     }
//  });


app.use('/home',function(req,res){
    res.render('hienthi');
});
// app.use('/them',rout);



// var docClient = new aws.DynamoDB.DocumentClient();
// var table = "Student"; 
// var year = 2015;
// var title = "The Big New Movie";
// var params = {
//     TableName:table,    Item: {        year: year,        title: title,        info: {
//             plot: "Nothing happens at all.",
//             rating: 0        }
//     }
// };
// console.log("Adding a new item...");
// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Added item:", JSON.stringify(data, null, 2));    }
// });


// var allstudent = JSON.parse(fs.readFileSync('./views/data.json', 'utf8'));
// allstudent.forEach(function(st) {
//     var params = {
//         TableName: "Student",
//         Item: {
//             "Masv":  st.Masv,
//             "Ten": st.Ten,
//             "ngaysinh":  st.ngaysinh,
//             "avatar":st.avatar,
//             "malop":st.malop
//         }
//     };

//     docClient.put(params, function(err, data) {
//        if (err) {
//            console.error("Unable to add movie", st.Ten, ". Error JSON:", JSON.stringify(err, null, 2));
//        } else {
//            console.log("PutItem succeeded:", st.Ten);
//        }
//     });
// });






app.listen(port,function(){
    console.log('start server ' + port);
});


