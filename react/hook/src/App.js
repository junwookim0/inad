
import './App.css';
import HookComp from './component/HookComp';
import ReducerComp from './component/ReduserComp';
import ReducerComp2 from './component/ReduserComp2';
import ExReducer from './component/ExReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExReducer/>
      </header>
      <header className="App-header">
        <HookComp/>
      </header>
      <header className="App-header">
        <ReducerComp/>
        <ReducerComp2/>
      </header>
      
    </div>
  );
}

export default App;
