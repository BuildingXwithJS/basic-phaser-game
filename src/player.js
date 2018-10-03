import { createGun, shootGun } from './gun';

let player = null;
let physicsGroup = null;
let globalEnemy = null;

const velocity = {
  x: 0,
  y: 0,
};

export const createPlayer = ({ scene, enemy }) => {
  globalEnemy = enemy;
  physicsGroup = scene.physics.add.group({
    // Initial angular speed of 60 degrees per second.
    // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
    angularDrag: 5,
    bounceX: 1,
    bounceY: 1,
    collideWorldBounds: true,
    dragX: 60,
    dragY: 60,
  });
  player = scene.add.circle(200, 200, 10, 0x6666ff);
  physicsGroup.add(player);

  createGun(scene);
};

export const updatePlayerPosition = (velocityX, velocityY) => {
  velocity.x = velocity.x + velocityX;
  velocity.y = velocity.y + velocityY;

  physicsGroup.setVelocity(velocity.x, velocity.y);
};

export const shoot = ({ x, y }) => {
  const { x: playerX, y: playerY } = player;
  shootGun({
    fromX: playerX,
    fromY: playerY,
    toX: x,
    toY: y,
    enemy: globalEnemy,
  });
  // gun.on = true;
  // gun.x = playerX;
  // gun.y = playerY;
  // gun.moveToX = x;
  // gun.moveToY = y;
};
