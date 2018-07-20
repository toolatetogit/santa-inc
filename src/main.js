import $ from 'jquery';
import Interface from './Interface';
import Game from './Game';
import Rudolph from './workers/Rudolph';

const userInterface = new Interface();
const game = new Game();

let currentWorkerLevel = new Rudolph();

function attachEvent() {
  $('#present-img').click(() => {
    game.updateTotalPresent(game.getClickPresent());
  });
} // attachEvent

$(document).ready(() => {
  attachEvent();
  userInterface.attachEvent(game);

  setInterval(() => {
    if (game.getTotalPresent() >= currentWorkerLevel.getCost()) {
      userInterface.drawWorkerList(currentWorkerLevel);
      currentWorkerLevel = currentWorkerLevel.next();
    }

    game.updateTotalPresent(game.getTotalOutput());
    $('#present-info').text(`1초당 ${game.getTotalOutput()}개 생산중!`);
  }, 1000);
});
