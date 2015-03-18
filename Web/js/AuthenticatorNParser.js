(function() {
    var MojioClient, config, mojio_client;
    MojioClient = this.MojioClient;
    config = {    
        application: '6f2eb05d-949a-4824-bbdd-b714d4e64f71', // Fill in your app id here!
        redirect_uri: 'http://ubkkb76eaabe.bdaves.koding.io/driver.html', // Fill in you redirect uri here! (Ex. 'http://localhost:4093/index.html')
        hostname: 'api.moj.io',
        version: 'v1',
        port: '443',
        scheme: 'https',
        live: false // This will connect your app to the sandbox environment, change it to true to go live.
    };
    mojio_client = new MojioClient(config);

mojio_client.token(function(error, result){
  if (error) { 
    mojio_client.authorize(config.redirect_uri);
  } else {
    // alert("Authorization Successful.");
    div = $("#welcome");
    div.html('Authorization Result:');
    div.append(JSON.stringify(result));
    var Trip = mojio_client.model("Trip");
    mojio_client.get(Trip, {}, function(error, result) {
        if (error) {
            alert(error);
        } else {
            var trips = mojio_client.getResults(Trip, result);
            console.log(result);
            Parse.initialize("4yGheaklr5wPeHHbzRePPsjuCgPfnrxmXnRyCfQH", "8fRZ5vFPJkTxZwoSl5Gg6JqJLSaZzxp8nbDIJqYm");
            //  alert("Parse authentication Successful.");
            var SessionId = Parse.Object.extend("SessionId");
            console.log(trips);
            for(i = 0; i < trips.length; ++i) {
               var sessionId = new SessionId();
               SessionId.set ("MojioId", trips[i].MojioId);
               sessionId.set ("StartTime", trips[i].StartTime);
               sessionId.set ("StopTime", trips[i].EndTime);
               if(trips[i].StartLocation !== null){
                   sessionId.set ("StartLoc", new Parse.GeoPoint({latitude: trips[i].StartLocation.Lat, longitude: trips[i].StartLocation.Lng}));} 
               if(trips[i].EndLocation !== null){
                   sessionId.set ("EndLoc", new Parse.GeoPoint({latitude: trips[i].EndLocation.Lat, longitude: trips[i].EndLocation.Lng}))};

                sessionId.save(null, {success: function(sessionId) {
                    // Execute any logic that should take place after the object is saved.
                    // alert('New object created with objectId: ' + sessionId.id);
                    }, error: function(sessionId, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    // alert('Failed to create new object, with error code: ' + error.message);
                    }
                });

            }
        }
    });
    }
});
}).call(this);