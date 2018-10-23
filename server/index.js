const axios = require('axios');
const yargs = require('yargs');
const EasyTwitch = require('./easy-twitch/easy-twitch.js')

const api = new EasyTwitch('is1qs2eeqnz4gzszqthp7gav6p048i');

const argv = yargs
  .command('list', 'List first 10 twitch streams')
  .command('streamers', 'List streamers')
  .help()
  .argv;

var command = argv._[0];

const fetchGames = async() => {
  try {
    console.log(await api.games())
  } catch(e) {
    console.log(e)
  }
}

const fetchStreamers = async() => {
  try {
    const games = await api.games()
    const gameId = games[0].game_id
    console.log(await api.streamers(gameId))
  } catch(e) {
    console.log(e)
  }
}

if (command === 'list') {
  fetchGames();
} else if(command === 'streamers') {
  fetchStreamers();
} else {
  console.log('Command not recognized')
}







