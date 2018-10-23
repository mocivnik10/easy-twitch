const axios = require('axios');

class EasyTwitch {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  games() {
    var instance = axios.create({
      baseURL: 'https://api.twitch.tv',
      headers: {
        'Client-ID': this.API_KEY,
        'content-type': 'application/json'
      }
    })

    instance.get('/helix/streams?first=10')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  streamers(gameId) {

  }
}

module.exports = EasyTwitch;



  