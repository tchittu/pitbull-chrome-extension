//NOTE: Code used from SPOTIFY public available sample repository
//future ref: https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js

var request = require('request'); // "Request" library

const client_id = '2f91c477788b42189cd1c01f7c342569';
const client_secret = '9bb53fc55602446e96bc712827a5f24e';

document.getElementById("play").addEventListener("click", playTrack);
document.getElementById("pause").addEventListener("click", pauseTrack);

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

function playTrack() {
  request.post(authOptions, function(error, response, body) {
    //if able to retrieve access token
    if (!error && response.statusCode === 200) {

      // use the access token to access the specified song by id
      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/me/player/play',
        headers: {
          'Authorization': 'Bearer BQCKUOyiFa2hGDEh_S_DLfB0Qhw4v6Vd-UjYoP3BO3bwJEyq7tpxJQW4902_t1MUszbCK84sI7ny_f0Fz5LQWMtQso1JvuOepA7fSlAMmQ0z6j_Li8ADNRbh4BxcfhZVhZroZf8YM7KfxOXEz7d5aR6t_toI9gMGhszLap207G9M1Ny_pIo'
        },
        json: true
      };
      request.put(options, function(error, response, body) {
        console.log(body);
      });
    } else {
      console.log(`Unable to access track, 
        code:${response.statusCode}, message:${response.error}`);
    }
  });
}

function pauseTrack() {
  request.post(authOptions, function(error, response, body) {
    //if able to retrieve access token
    if (!error && response.statusCode === 200) {

      // use the access token to access the specified song by id
      var token = body.access_token;
      var options = {
        url: 'https://developer.spotify.com/console/put-pause/',
        headers: {
          'Authorization': 'Bearer BQCKUOyiFa2hGDEh_S_DLfB0Qhw4v6Vd-UjYoP3BO3bwJEyq7tpxJQW4902_t1MUszbCK84sI7ny_f0Fz5LQWMtQso1JvuOepA7fSlAMmQ0z6j_Li8ADNRbh4BxcfhZVhZroZf8YM7KfxOXEz7d5aR6t_toI9gMGhszLap207G9M1Ny_pIo'
        },
        json: true
      };
      request.put(options, function(error, response, body) {
        console.log(body);
      });
    } else {
      console.log(`Unable to access track, 
        code:${response.statusCode}, message:${response.error}`);
    }
  });
}

function main() {
  pauseTrack();
  //getTrackByID('3cHyrEgdyYRjgJKSOiOtcS');
  console.log("Got song");
}

if (require.main === module) {
  main();
}
