require('./cube.scss');

/**
 * @class Cube
 *
 * registers hits and sets off moles, adds classes that move it
 * just have a setTimeout with a time started by the scheduler
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Cube {
  /*
   * @constructs Example
   *
   * Gets images and renders them.
   *
   * @param {Object} state passed in initial state
   */
  constructor(globalState) {
    this.state = globalState.state || {};
    this.score = document.querySelector('.cube .score');
  }
}

export default Cube;