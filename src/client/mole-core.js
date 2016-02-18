require('./page.scss');

/**
 * Whack a mole!
 *
 * Bootstraps the app.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */

import Cube from './components/cube/cube';
import Scheduler from './components/scheduler/scheduler';

(() => {

  var cube = new Cube();
  var scheduler = new Scheduler(cube);

  function init() {
    bindCubeforStart();
  }

  function bindCubeforStart() {
    cube.score.addEventListener('click', () => {
      scheduler.startContext();
      scheduler.schedule();
    });
  }

  init();

})();

