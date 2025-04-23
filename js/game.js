/* global Phaser */

// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// scene import statments
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/**
 * Start phaser Game.
 */

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: remember any "Key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// the start scene
game.scene.start('splashScene')
