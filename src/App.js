import './App.css';
import Ad from './components/Ad';
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Ad />
      <Ad>
        Buy my stuff now because it's the best!
      </Ad>
      <Ad onClick={() => {alert('Take advantage of overnight shipping and buy more stuff now!')}}>
        We offer overnight shipping!
      </Ad>
    
    </div>
  );
}

export default App;
