/* eslint react/jsx-filename-extension: 0 */
import React from 'react';

class App extends React.PureComponent {
  render() {
    return (
      <div
        onClick={() => {
          console.log('~~~');
        }}
      >
        hello webpack
      </div>
    );
  }
}

export default App;
