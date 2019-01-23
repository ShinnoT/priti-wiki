import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/Home.css';

import TextField from '@material-ui/core/TextField';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="title">PRITIWIKI</p>
          <p>Wikipedia, but prettier.</p>
          <div className="search-bar">
            <TextField
              id="outlined-with-placeholder"
              label="Search"
              placeholder="What would you like to search for?"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
