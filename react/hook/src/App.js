
import './App.css';
import HookComp from './component/HookComp';
import ReducerComp from './component/ReduserComp';
import ReducerComp2 from './component/ReduserComp2';
import ExReducer from './component/ExReducer';
import MemoHook from './component/MemoHook';

import Typewriter from 'typewriter-effect/dist/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typewriter
								options={{
									strings: [
										"React ",
										"Flutter ",
										"Html ",
										"React Native",
										"Vue",
										"Angular",
									],
									autoStart: true,
									loop: true,
								}}
							/>
      </header>

      <header className="App-header">
        <MemoHook/>
      </header>
      <header className="App-header">
        <ExReducer/>
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
