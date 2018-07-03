import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';

// ReactDom.hydrate(<App />, document.getElementById('root'));

const render = Cpm => {
  ReactDom.hydrate(
    <AppContainer>
      <Cpm />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default;
    // ReactDom.hydrate(<NextApp />, document.getElementById('root'));
    render(NextApp);
  });
}
