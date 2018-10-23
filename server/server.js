const axios = require('axios');
const yargs = require('yargs');
const EasyTwitch = require('./easy-twitch/easy-twitch.js')

const api = new EasyTwitch('is1qs2eeqnz4gzszqthp7gav6p048i');

const argv = yargs
  .command('list', 'List first 10 twitch streams')
  .help()
  .argv;

var command = argv._[0];

if (command === 'list') {
  api.games();
} else {
  console.log('Command not recognized')
}





