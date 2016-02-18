require('./cube.scss');

/**
 * @class Cube
 *
 * Keeps score and sets off moles.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Cube {
  /**
   * @constructor Cube
   */
  constructor() {

    /**
     * Start DOM element.
     * @type {Object}
     */
    this.start = document.querySelector('.cube .score');

    /**
     * Game score.
     * @type {Number}
     */
    this.score = 0;

    /**
     * Style class for scored moles.
     * @type {String}
     */
    this.SCORED_CLASS = 'scored';

    /**
     * Collection of moles.
     * @type {Object}
     */
    this.moles = document.querySelectorAll('.mole');
  }

  /**
   * Binds the moles to click.
   */
  bindMoles() {
    var i;

    for (i = 0; i < this.moles.length; i++) {
      this.moles[i].addEventListener('click', (event) => {
        this.bindMole(event);
      });
    } 
  }

  /**
   * Adds to score if mole is clicked.
   */
  bindMole(event) {
    if (!event.target.classList.contains(this.SCORED_CLASS)) {
      this.addScore();
    }
    this.start.innerHTML = this.score;
    event.target.classList.add(this.SCORED_CLASS);
  }

  /**
   * Randomly moves moles.
   *
   * @param {Number} speed in ms
   */
  moveMoles(speed) {
    var movable,
        randomMoleIndex,
        activeMole;
    
    setInterval(() => {
      movable = document.querySelectorAll('.mole.resting');

      if (movable.length !== 0) {
        randomMoleIndex = Math.floor(Math.random() * 10 % movable.length);
        activeMole = movable[randomMoleIndex];
        activeMole.classList.add('move');
        activeMole.classList.remove('resting');
      }
    }, speed);
  }

  /**
   * Increments your score.
   */
  addScore() {
    this.score++;
  }
}

export default Cube;