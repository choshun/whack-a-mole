require('./cube.scss');

/**
 * @class Cube
 *
 * registers hits and sets off moles, adds classes that move it
 * just have a setTimeout with a time started by the scheduler
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Example {
  /*
   * @constructs Example
   *
   * Gets images and renders them.
   *
   * @param {Object} state passed in initial state
   */
  constructor(globalState) {
    this.state = globalState.state || {};
    this._images = this._getImages(this.state.images);
    this.section;
  }

  /**
   * Renders html.
   * @param {String} contents html to inject.
   */
  render(contents) {
    if (this.section === undefined) {
      this.section = document.createElement('section');
    }

    this.section.setAttribute('class', 'example');
    this.section.innerHTML = contents;
    this.state.appElement.appendChild(this.section);
  }

  /**
   * Creates html for images.
   */
  createImages() {
    var html = `
            <ul class="image-list">
              ${this._images.map(image => `
                <li class="item" style="background-image:url(${image})" id="${image}">
                </li>`).join('\n')}
            </ul>
        `;

    this.render(html);
  }

  // TESTING for sequence
  bindMole() {
    var mole = document.querySelector('.mole');

    var back = document.querySelector('.back');

    var left = document.querySelector('.left');

    console.log('wired', mole);

    mole.addEventListener('click', (event) => {
      document.querySelector('.container').classList.add('resting', 'cube-right');
      console.log('click!');

      setTimeout(() => {
        document.querySelector('.container').classList.add('resting');
        document.querySelector('.container').classList.remove('cube-right');
      }, 3500);
    });

    back.addEventListener('click', (event) => {
      document.querySelector('.container').classList.add('cube-right');

      setTimeout(() => {
        document.querySelector('.container').classList.remove('resting');
      }, 3500);

      setTimeout(() => {
        document.querySelector('.container').classList.remove('cube-right');
      }, 4000);

      console.log('click!');
    });

    left.addEventListener('click', (event) => {
      document.querySelector('.container').classList.toggle('wide');
      document.querySelector('.container').classList.toggle('tall');
      console.log('left!');

      setTimeout(() => {
        document.querySelector('.container').classList.toggle('perspective-lower-right');
      }, 3000);

      setTimeout(() => {
        document.querySelector('.container').classList.toggle('perspective-lower-right');
      }, 3800);
    });
  }

  /**
   * Gets canvas images from app.state.
   * @param {Object} canvasImages canvasImages
   */
  _getImages(exampleImages) {
    var i,
        images = [];

    for (i = 0; i < exampleImages.length; i++) {
      images.push(exampleImages[i].image);
    }

    return images;
  }
}

export default Example;