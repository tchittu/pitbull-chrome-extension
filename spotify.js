//NOTE: Code used from SPOTIFY public available sample repository
//future ref: https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js

var request = require('request'); // "Request" library

const client_id = '2f91c477788b42189cd1c01f7c342569';
const client_secret = '9bb53fc55602446e96bc712827a5f24e';

//GET ACCESS TOKEN
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    //Basic authoriation: id:secret
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

function getTrackByID(id) {
  request.post(authOptions, function(error, response, body) {
    //if able to retrieve access token
    if (!error && response.statusCode === 200) {

      // use the access token to access the specified song by id
      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/tracks/${id}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body);
      });
    } else {
      console.log(`Unable to access track, 
        code:${response.statusCode}, message:${response.error}`);
    }
  });
}

function playTrackByID() {
  request.put(authOptions, function(error, response, body) {
    //if able to retrieve access token
    if (!error && response.statusCode === 200) {
      // use the access token to access the specified song by id
      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/me/player/play',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log("MESSAGE: " + response.error.message);
      });
    } else {
      console.log("MESSAGE: " + response.error.message);
    }
  });
}



function main() {
  playTrackByID();
  //getTrackByID('3cHyrEgdyYRjgJKSOiOtcS');
  console.log("Got song");
}

if (require.main === module) {
  main();
}

document.getElementById("play").addEventListener("click", main);

//POST
  //method: 'POST'
  //headers
    //Content type: what does this even mean
    //Authorization:

  //body


//GET
