My take on whack a mole! ヽ(*≧ω≦)ﾉ

###Getting started:

1. $ git clone https://github.com/choshun/whack-a-mole.git
2. $ npm install
3. $ npm start
4. $ npm run webpack-watch
5. go to http://localhost:1200/

###File Structure

Everything should be component based, so html, css, and js should be in the same folder.

* /src/client/
  * index.html - the page.
  * page.scss - the css for the page outside of components.
  * mole-core.js - bootstrapper.
* /src/client/components
  * cube - Has different css cube states, and registers mole scores.
  * scheduler - Sequencer for events. Mostly adding style classes.
