import './App.css';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Use My Tech Stuff</h1>
      </header>
      <div className="App-cards">
        <ItemList/>
      </div>
    </div>
  );
}

export default App;
