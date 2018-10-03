import Phaser from 'phaser';
import { updatePlayerPosition, shoot } from './player';

const DIRECTION_VELOCITY = 10;

class InputManager {
  constructor() {
    this.keys = [
      {
        name: 'W',
        value: Phaser.Input.Keyboard.KeyCodes.W,
        velocityX: 0,
        velocityY: -DIRECTION_VELOCITY,
      },
      {
        name: 'A',
        value: Phaser.Input.Keyboard.KeyCodes.A,
        velocityX: -DIRECTION_VELOCITY,
        velocityY: 0,
      },
      {
        name: 'S',
        value: Phaser.Input.Keyboard.KeyCodes.S,
        velocityX: 0,
        velocityY: DIRECTION_VELOCITY,
      },
      {
        name: 'D',
        value: Phaser.Input.Keyboard.KeyCodes.D,
        velocityX: DIRECTION_VELOCITY,
        velocityY: 0,
      },
    ];
  }

  setupListeners(game) {
    // handle keyboard input
    this.bindings = {};
    this.keys.forEach(({ name, value }) => {
      this.bindings[name] = game.input.keyboard.addKey(value);
    });
    // handle mouse clicks
    game.input.on('pointerdown', shoot, this);
  }

  handleUpdate() {
    Object.keys(this.bindings).forEach(key => {
      if (this.bindings[key].isDown) {
        console.log(key, this.bindings[key].isDown);
        const currentKey = this.keys.find(({ name }) => name === key);
        updatePlayerPosition(currentKey.velocityX, currentKey.velocityY);
      }
    });
  }
}

const inputManagerInstance = new InputManager();

export const setupListeners = game => inputManagerInstance.setupListeners(game);
export const handleUpdate = () => inputManagerInstance.handleUpdate();
