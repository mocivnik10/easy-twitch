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
const CLIENT_ID = 'YOUR_KEY_HERE'

const EasyTwitch = require('@mocivnik10/easy-twitch')
const api = new EasyTwitch(CLIENT_ID);

const chalk = require('chalk');

main = async () => {
  const games = await api.games()
  console.log(chalk.yellow("CURRENTLY TOP GAMES"))
  console.log("-------------")
  games.forEach((item, _) => {
    console.log(item.name)
  })
  console.log()

  const topGame = games[0]
  const streamers = await api.streamers(topGame.id)

  console.log(chalk.yellow("TOP GAME: " + topGame.name))
  console.log("-------------")

  streamers.forEach((item, _) => {
    console.log(item.user_name + " - " + item.viewer_count + " viewers")
  })
}

main()
```