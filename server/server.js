const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/users', function (req, res) {
  let users = fs.readFileSync('./server/users.json')
  let currentPage = +req.query.currentPage;
  let pageSize = +req.query.pageSize;
  let newUsers = JSON.parse(users).slice((currentPage - 1) * pageSize,(currentPage - 1) * pageSize + pageSize);
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(newUsers));
});
app.get('/userss/:id',function(req,res){
  let users = fs.readFileSync('./server/users.json');
  let currentUser = req.params['id'];
  let userCopy = JSON.parse(users);
  let user = userCopy[currentUser-1];
  console.log(user)
  user.followed = !user.followed;
  userCopy[currentUser-1] = user;
  fs.writeFileSync('./server/users.json',JSON.stringify(userCopy));
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(currentUser));
})
app.get('/Profile/:userID', function (req, res) {
  let users = fs.readFileSync('./server/users.json')
  let currentUser = req.params['userID'];
  let user = JSON.parse(users)[currentUser-1];
  console.log(user);
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(user));
});
app.listen(2000);
