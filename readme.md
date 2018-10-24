# @mocivnik10/easy-twitch


[![GitHub license](https://img.shields.io/github/license/mocivnik10/easy-twitch.svg)](https://github.com/mocivnik10/easy-twitch)

## Install

```
$ npm install @mocivnik10/easy-twitch 
```

## Twitch Client ID

To make API calls, you need a client ID. Create one by following the guide here:
- https://dev.twitch.tv/docs/api/

## Example Usage

```
const EasyTwitch = require('@mocivnik10/easy-twitch');
const api = new EasyTwitch('Client_ID');

// Fetch Games
const fetchGames = async() => {
  try {
    console.log(await api.games(2))
    // return first 2 games from Twitch
  } catch(e) {
    console.log(e)
  }
}
console.log(fetchGames())

// Fetch Streamers
const fetchStreamers = async() => {
  try {
    const games = await api.games()
    const gameId = games[0].game_id
    console.log(await api.streamers(gameId))
  } catch(e) {
    console.log(e)
  }
}
console.log(fetchStreamers())