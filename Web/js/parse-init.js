Parse.initialize("4yGheaklr5wPeHHbzRePPsjuCgPfnrxmXnRyCfQH", "8fRZ5vFPJkTxZwoSl5Gg6JqJLSaZzxp8nbDIJqYm");

var SessionId = Parse.Object.extend("SessionId");
var sessionId = new SessionId();
 sessionId.set ("Start", "StartAddress");
 sessionId.set ("Stop", "StopAddress");
 sessionId.set ("gpss", "location")
 
 sessionId.save(null, {
  success: function(sessionId) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + sessionId.id);
  },
  error: function(sessionId, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});

