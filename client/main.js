import { Boot } from './scenes/Boot.js'
import { Game } from './scenes/Game.js'
import { GameOver } from './scenes/GameOver.js'
import { MainMenu } from './scenes/MainMenu.js'
import { Preloader } from './scenes/Preloader.js'
// biome-ignore lint/correctness/noUnusedImports: 一時的
import { discordSdk, initiateDiscordSDK } from './utils/discordSdk.js'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.80.0/Phaser.Types.Core.GameConfig
;(async () => {
  initiateDiscordSDK()
  // You can use discordSdk to access the Discord SDK and make the requests you need

  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Boot, Preloader, MainMenu, Game, GameOver],
  }

  new Phaser.Game(config)
})()
