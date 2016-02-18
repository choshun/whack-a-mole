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
  constructor() {
    this.start = document.querySelector('.cube .score');
    this.score = 0;
    this.SCORED_CLASS = 'scored';
    this.moles = document.querySelectorAll('.mole');
  }

  bindMoles() {
    var i;

    for (i = 0; i < this.moles.length; i++) {
      this.moles[i].addEventListener('click', (event) => {
        this.bindMole(event);
      });
    } 
  }

  bindMole(event) {
    if (!event.target.classList.contains(this.SCORED_CLASS)) {
      this.addScore();
    }
    this.start.innerHTML = this.score;
    event.target.classList.add(this.SCORED_CLASS);
  }

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

  addScore() {
    this.score++;
  }
}

export default Cube;