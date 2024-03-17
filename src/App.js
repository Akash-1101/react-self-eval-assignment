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
    // <div>
    //   <Login/>
    //   <Dashboard/>
    // </div>
  );
}

export default App;
