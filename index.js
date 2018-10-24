const axios = require('axios');

class EasyTwitch {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  async games(howMany) {
  
    try {
      var instance = axios.create({
        baseURL: 'https://api.twitch.tv',
        headers: {
          'Client-ID': this.API_KEY,
          'content-type': 'application/json'
        }
      })

      const response = await instance.get(`/helix/streams?first=${howMany}`)
      const games = []
      response.data.data.map((game) => {
        games.push({
          title: game.title,
          viewer_count: game.viewer_count,
          game_id: game.game_id,
          thumbnail_url: game.thumbnail_url
        })
      })
      
      return games;
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
      const streamers = [];
      response.data.data.map((streamer) => {
        streamers.push({
          user_name: streamer.user_name,
          viewer_count: streamer.viewer_count,
          title: streamer.title
        })
      })
      return streamers;
    } catch(e) {
      throw e;
    }
    
  };
}

module.exports = EasyTwitch;



  