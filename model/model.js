var mysql=require('mysql');
var axios = require('axios')
var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'Nav@gur1',
   database:'Meraki_courses_with_mysql'
});
connection.connect(function(error){
   if(!error){
     console.log('Connection established successfully..');
   }else{
     console.log('Connection failed..');
   }
}); 

// const url = 'https://api.merakilearn.org/courses'
// axios.get(url).then(response => {
//     const data = (response.data);
//     for (i of data){
//         var sql = "INSERT INTO Meraki_Courses (id,name,logo,days_to_complete,short_description) VALUES ?";
//         var values = [
//           [i['id'], i['name'],i['logo'],i['days_to_complete'],i['short_description']]
//         ];
//         connection.query(sql, [values])
//       };    
// });

module.exports = connection; 
