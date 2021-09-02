const connection = require('../model/model');
exports.get = function(req,res) {
  connection.query('SELECT * FROM Meraki_Courses',(err,result)=>{
    if (!err){
      res.send(result)
    }else{
      res.send('Some error occured..')
    }
  });
}

exports.post = function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var logo = req.body.logo;
  var days_to_complete = req.body.days_to_complete;
  var short_description = req.body.short_description;
  var sql = "INSERT INTO Meraki_Courses (id,name,logo,days_to_complete,short_description) VALUES ?";
      var values = [
        [id,name,logo,days_to_complete,short_description]
      ];
      connection.query(sql, [values],(err,result)=>{
        if(!err){
          res.send('Data inserted successfully..')
        }else{
          res.send('Some error occured..')
      }
  })
}

exports.put = function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var logo = req.body.logo;
  
  var sql = "UPDATE Meraki_Courses set name = ? , logo = ? WHERE id = ?";
  connection.query(sql, [name, logo ,id], (err, result)=>{
      if(!err){
        res.send('Data updated successfully..')
      }else{
        res.send('Some error occured..')
      }
  })
}

exports.delete = function(req,res){
  var id = req.body.id;
  var sql = "DELETE FROM Meraki_Courses WHERE id = ?";
  connection.query(sql,id, (err, result)=>{
      if(!err){
        res.send('Data deleted successfully..')
      }else{
        res.send('Some error occured..')
    }
  })
}

