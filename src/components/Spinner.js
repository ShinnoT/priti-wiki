import React, { Component } from 'react';
import '../style/Spinner.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <CircularProgress />
      </div>
    );
  }
}

export default Spinner;
