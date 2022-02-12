//NOTE: Code used from SPOTIFY public available sample repository
//future ref: https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js

var request = require('request'); // "Request" library

const client_id = 'cf3c25f3965f4b348176345e66199ae1';
const client_secret = '9b0b18ce50244878bfe2dcace308df4c';

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

function playTrackByID(id) {
  request.post(authOptions, function(error, response, body) {
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
        console.log(body);
      });
    } else {
      console.log(`Unable to access track, 
        code:${response.statusCode}, message:${response.error}`);
    }
  });
}

function getPlaybackState() {
  request.post(authOptions, function(error, response, body) {
    //if able to retrieve access token
    if (!error && response.statusCode === 200) {

      // use the access token to access the specified song by id
      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/me/player`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body);
      });
    } else {
      console.log(`Unable to play, 
        code:${response.statusCode}, message:${response.error}`);
    }
  });
}



function main() {
  //getTrackByID('3cHyrEgdyYRjgJKSOiOtcS');
  getPlaybackState();
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
