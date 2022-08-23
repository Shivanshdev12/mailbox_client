import Layout from "./components/Layout/Layout";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const isToken = localStorage.getItem("token");
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {isToken === null && <Route path="/signup" exact><Signup /></Route>}
        {isToken === null && <Route path="/login" exact><Login /></Route>}
      </Switch>
    </Layout>
  );
}

export default App;
