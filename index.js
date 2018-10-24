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

      const response = await instance.get(`/helix/games/top`)
      const games = []
      response.data.data.map((game) => {
        games.push({
          id: game.id,
          name: game.name,
          box_art_url: game.box_art_url
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



  