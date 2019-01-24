import React, { Component } from 'react';
import '../style/Home.css';
import Spinner from './Spinner';

import TextField from '@material-ui/core/TextField';

const style = {
  backgroundColor: '#EDF5E1',
  color: '#379683',
  borderRadius: '6px'
};

class Home extends Component {
  constructor() {
    super();
    this.state = { searchQuery: null };
  }
  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // line below logs the user input to the console on browser - ideally this is where you want to start calling the API
    console.log('input value:::: ', this.state.searchQuery);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="title">PRITIPEDIA</p>
          <p>Wikipedia, but prettier.</p>
          <div className="search-bar">
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-with-placeholder"
                label="Search"
                placeholder="What would you like to search for?"
                fullWidth
                margin="normal"
                variant="outlined"
                autoFocus
                style={style}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
