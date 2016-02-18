/**
 * @class Sequence
 *
 * The sequence of the game in seconds.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Sequence {
  constructor() {

    /**
     * Time, then event callbacks. Each callback needs to be unique.
     * The resolution should be to one event cycle (~20 ms).
     *
     * @author choshun.snyder@gmail.com (Choshun Snyder)
     */
    this.sequence = [
      {
        'time': 0,
        'events': {
          'setClass': 'container resting cube-right'
        }
      },
      {
        'time': 0.5,
        'events': {
          'setClass': 'app play'
        }
      },
      {
        'time': 3.5,
        'events': {
          'moveMoles': '2000',
          'setClass': 'container resting'
        }
      },
      {
        'time': 5.5,
        'events': {
          'setClass': 'cube slow'
        }
      },
      {
        'time': 8.5,
        'events': {
          'setClass': 'container resting wide tall'
        }
      },
      {
        'time': 15.5,
        'events': {
          'setClass': 'container resting wide tall perspective-lower-right'
        }
      },
      {
        'time': 16.5,
        'events': {
          'setClass': 'container resting wide tall perspective-lower-right'
        }
      },
      {
        'time': 19.5,
        'events': {
          'moveMoles': '2000',
          'setClass': 'container resting tall perspective-upper-right'
        }
      },
      {
        'time': 20.5,
        'events': {
          'setClass': 'container resting open perspective-upper-right'
        }
      },
      {
        'time': 24,
        'events': {
          'setClass': 'container resting perspective-lower-right'
        }
      },
      {
        'time': 24,
        'events': {
          'setClass': 'container resting'
        }
      },
      {
        'time': 28,
        'events': {
          'setClass': 'container resting cube-right'
        }
      },
      {
        'time': 31.5,
        'events': {
          'setClass': 'container cube-right'
        }
      },
      {
        'time': 32.5,
        'events': {
          'setClass': 'container'
        }
      },
      {
        'time': 35,
        'events': {
          'setClass': 'app end'
        }
      }
    ];
  }
}

export default Sequence;