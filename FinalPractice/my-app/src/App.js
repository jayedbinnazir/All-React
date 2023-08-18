import './App.css';
import ClassCounter from './ClassComponent/ClassCounter';
import HookCounter from "./FunctionCOmponent/HookCounter"
import ClassEvent from './ClassComponent/ClassEvent';
import HookEvent from "./FunctionCOmponent/HookEvent"
import EventContainer from './ClassComponent/EventContainer';



function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <ClassEvent/>
      <HookEvent/>
      <EventContainer/>
    </div>
  );
}

export default App;
