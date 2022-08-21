import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
    <TopBar/> 
    <Switch>
      <Route exact path="/">
            <Home/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
