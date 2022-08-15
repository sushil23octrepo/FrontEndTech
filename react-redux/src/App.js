import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

//To provide redux store to our react component we have to import provider

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
