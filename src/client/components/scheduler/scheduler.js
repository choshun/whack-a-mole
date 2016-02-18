import Sequence from './sequence';

/**
 * @class Scheduler
 *
 * A sequencer using audio context for timing.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Scheduler {
  /*
   * @constructs Scheduler
   *
   * @param {Object} cube cube object to schedule
   */
  constructor(cube) {
    this.sequence = new Sequence().sequence;

    /**
     * Interval to try and refire schedule.
     * @type {Number} in ms
     */
    this.lookahead = 30;

    /**
     * Time to look ahead in sequence to schedule.
     * @type {Number} in sec (audio context is in seconds)
     */
    this.scheduleAheadTime = 0.1;

    /**
     * Index of scheduled events.
     * @type {Number}
     */
    this.index = 0;

    /**
     * Time at which to fire scheduled items.
     * @type {Number} in sec
     */
    this.eventTime = 0;

    /**
     * Whether to keep interval for next scheduled event
     * @type {Boolean}
     */
    this.play = true;
  }

  startContext() {
    this.context = new window.AudioContext();
  }

  schedule() {
    var eventKey,
        trigger; // single event

    trigger = this.sequence[this.index];
    this.eventTime = trigger.time;

    // If the event time is less than now and a look ahead time window
    if (this.eventTime < (this.context.currentTime +
        this.scheduleAheadTime)) {

      // fire callbacks
      for (eventKey in trigger.events) {
        var eventValue = trigger.events[eventKey];
        this[eventKey](eventValue);
      }

      // keep going if there's more scheduled events
      if (this.sequence[this.index + 1] !== undefined) {
        this.index++;
      } else {
        this.play = false;
      }
    }

    if (this.play) {
      window.setTimeout(() => {
        this.schedule();
      }, this.lookahead);
    }
  }

  setClass(theClass) {
    document.querySelector('.' + theClass.split(' ')[0]).
        setAttribute('class', theClass);
  }
}

export default Scheduler;