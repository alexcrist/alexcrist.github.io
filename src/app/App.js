import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-section">
          <h1>alex crist</h1>
          boy climber coder likes lists and kind people dislikes cilantro
        </div>
        <div className="App-section">
          <h2>my shit</h2>
          <div><a href="https://alexcrist.github.io/climbing-tick-list/">ticklist</a></div>
          <div><a href="https://github.com/alexcrist">github</a></div>
          <div><a href="https://www.instagram.com/alex_crist/">instagram</a></div>
          <div><a href="https://open.spotify.com/user/eviledamame">spotify</a></div>
        </div>
        <div className="App-section">
          <h2>my life</h2>
          <div>get birthed</div>
          <div>sammamish</div>
          <div>start coding</div>
          <div>seattle</div>
          <div>start climbing</div>
          <div>graduate highschool</div>
          <div>boston</div>
          <div>san diego</div>
          <div>you are <i>here</i></div>
          <div>boston again</div>
          <div>graduate neu</div>
          <div>do cool stuff</div>
          <div>climb large rocks</div>
          <div>die eventually</div>
        </div>
      </div>
    );
  }
}

export default App;
