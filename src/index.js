import Phaser from 'phaser';
import create from './createScene';
import update from './update';
import preload from './preload';

const engineConfig = {
  type: Phaser.AUTO,
  width: 500,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 200 },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(engineConfig);
