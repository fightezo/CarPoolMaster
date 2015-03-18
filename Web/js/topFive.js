// returning an arroy of 5 phone numbers (strings)
Parse.initialize("4yGheaklr5wPeHHbzRePPsjuCgPfnrxmXnRyCfQH", "8fRZ5vFPJkTxZwoSl5Gg6JqJLSaZzxp8nbDIJqYm");
var SessionId = Parse.Object.extend("SessionId");
var query = new Parse.Query(SessionId);
var loc = new Parse.GeoPoint([49.264745, -123.23545]);
query.near("StartLoc", loc);
// query.doesNotExist(null);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " phone numbers.");
    // Do something with the returned Parse.Object values
    // for (var i = 0; i < results.length; i++) { 
    for (var i = 0; i < 5; i++) { 
      var object = results[i];
      if(object.get('phone') !== null){
      alert('Phone Number: ' + object.get('phone'));
    console.log('Phone Number: ' + object.get('phone'));
      }
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
