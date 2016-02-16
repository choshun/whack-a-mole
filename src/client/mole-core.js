require('./page.scss');

/**
 * Example page
 *
 * Bootstraps the page.
 * All DOM bindings and app.state properties
 * should be set here.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
import App from './components/app';
import Cube from './components/cube/cube';

(() => {
  var gameState = {
    appElement: document.getElementById('app'),
    images: [
      {
        'image': '/images/shmeh.jpg',
        'name': 'art'
      },
      {
        'image': '/images/bear-shark-unicornsurfing.jpg',
        'name': 'art'
      }
    ]
  };

  var app = new App(gameState);
  var cube = new Cube(app);

  const CLICKED_CLASS = '_open';

  function init() {
    // render example
    // cube.createImages();

    // bind example
    cube.bindMole();
  }

  init();

})();

