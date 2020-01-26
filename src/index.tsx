import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './state/config'
import { Provider } from 'react-redux';
import Child from './Child';

const App = (props: any) => {
  
  return (
    <Provider store={store}>
      <div>
        <h1>Welcome to React w/ TypeScript Template</h1>
      </div>
      <Child />
    </Provider>
  );
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
)
