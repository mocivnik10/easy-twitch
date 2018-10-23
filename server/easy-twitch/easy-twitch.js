const axios = require('axios');

class EasyTwitch {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  async games() {
  
    try {
      var instance = axios.create({
        baseURL: 'https://api.twitch.tv',
        headers: {
          'Client-ID': this.API_KEY,
          'content-type': 'application/json'
        }
      })

      const response = await instance.get('/helix/streams?first=10')
      return response.data.data;
    } catch(e) {
      throw e;
    }
  };

  async streamers(gameId) {
    try {
      var instance = axios.create({
        baseURL: 'https://api.twitch.tv',
        headers: {
          'Client-ID': this.API_KEY,
          'content-type': 'application/json'
        }
      })

      const response = await instance.get(`/helix/streams?game_id=${gameId}`)
      return response.data.data;
    } catch(e) {
      throw e;
    }
    
  };
}

module.exports = EasyTwitch;



  