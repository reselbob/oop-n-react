import './App.css';
import Ad from './components/Ad';
import Simple from './components/Simple';


const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        This is a project that demonstrates how to apply OOP thinking to React programming.
      </div>
      <Simple />
      <Ad />
      <Ad>
        Buy my stuff now because it's the best!
      </Ad>
      <Ad onClick={() => {console.log('This is outside behavior for Ad Two')}}>
        We offer overnight shipping!
      </Ad>
    
    </div>
  );
}

export default App;
