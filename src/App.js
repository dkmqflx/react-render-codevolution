import './App.css';
import { ChildA } from './components/Context/ContextChildren';
import { ContextParent } from './components/Context/ContextParent';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA></ChildA>
      </ContextParent>
    </div>
  );
}

export default App;
