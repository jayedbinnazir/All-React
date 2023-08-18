import { Route, Routes } from 'react-router-dom';
import './App.css';
import EffectCLassOne from './UseEffectComponents/EffectCLassOne';
import EffectOne from './UseEffectComponents/EffectONE';

function App() {
  return (
    <div className="App">
      {/* <div className='item' ><EffectClassOne/></div>
      <div className='item' ><EffectOne/> </div>
      <div className='item' ><Display/></div>
      <div className='item' > <ClassTimer/></div>
      <div className='item' ><UseEffectIncorrect/> </div>
      <div className='item' ><CountReduce/></div>
       */}
       <Routes>
          <Route path='/' element={<EffectCLassOne/>} />
          <Route path='effectone' element={<EffectOne/>} />
       
       </Routes>
      
     
      
      
    </div>
  );
}

export default App;
