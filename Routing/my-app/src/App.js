import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import DashBoard from './Components/DashBoard';
import Error from './Components/Error';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import Services from './Components/Services';

function App() {
  let isLoggedIn = true ;
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/services' component={Services} />  */}
          {/* <Route exact path='/services'>
             <Services number = {5}  />   // We lost routing Property
          </Route> */}
          {/* <Route exact path='/services'>
            {
              props=>{
                return <Services Route={props} number={5} />
              }
            }
          </Route> */}

          <Route exact path='/services' render={(props)=> <Services Route={props} number={5} /> } />
          <Route exact path='/Posts/:catagory/:topic' component={Posts} />

          // logIn
          

          <Route exact path='/dashboard' component={DashBoard} />
          <Route exact path='/logIn'>
            {
              isLoggedIn ? <Redirect to="/dashboard" /> : <Home/>
            }
          </Route>


          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
