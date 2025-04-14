/* global Phaser */

// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This is the Phaser3 game configuration file

/**
 *Start Phaser Gamer.
 */

"use strict"

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
