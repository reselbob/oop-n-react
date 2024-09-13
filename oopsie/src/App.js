import './App.css';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <div className="App-header">
This is a project the demonstrates how to apply OOP thinking to React programming.

      </div>
      <Ad>
        Ad One
      </Ad>
      <Ad onClick={() => {console.log('This is outside behavior for Ad Two')}}>
        Ad Two
      </Ad>
      <Ad />
    </div>
  );
}

export default App;
