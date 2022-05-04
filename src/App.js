import './App.css';
import { GrandParent } from './components/Optimization/GrandParent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';

function App() {
  return (
    <div className="App">
      <GrandParent></GrandParent>
      {/* <ParentOne>
        <ChildOne></ChildOne>
      </ParentOne> */}
    </div>
  );
}

export default App;
