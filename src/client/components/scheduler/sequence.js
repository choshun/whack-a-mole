/**
 * @class Sequence
 *
 * The sequence of the game in seconds.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Sequence {
  constructor() {
    this.sequence = [
      {
        'time': 0,
        'events': {
          'setClass': 'container resting cube-right'
        }
      },
      {
        'time': 5.5,
        'events': {
          'setClass': 'container resting'
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
          'setClass': 'container cube-right wide tall perspective-lower-right'
        }
      },
      {
        'time': 19.5,
        'events': {
          'setClass': 'container tall perspective-lower-right'
        }
      },
      {
        'time': 20.5,
        'events': {
          'setClass': 'container open perspective-lower-right'
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
      }
    ];
  }
}

export default Sequence;