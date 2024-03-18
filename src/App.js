import {Switch,Route,BrowserRouter} from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
    </BrowserRouter>
<<<<<<< HEAD
=======
    // <div>
    //   <Login/>
    //   <Dashboard/>
    // </div>
>>>>>>> 12c8ee1fe7d37f531c6846cd99ad57b2fdde97bf
  );
}

export default App;