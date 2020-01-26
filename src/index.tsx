import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store, persistor } from './state/config'
import { Provider } from 'react-redux';
import Child from './Child';
import { PersistGate } from 'redux-persist/es/integration/react';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const App = (props: any) => {

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <div>
          <h1>Welcome to React w/ TypeScript Template</h1>
        </div>
        <Child />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
)
