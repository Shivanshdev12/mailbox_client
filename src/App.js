import Layout from "./components/Layout/Layout";
import Signup from "./components/Auth/Signup";
import { Switch, Route } from "react-router-dom";

function App() {
  const isToken = localStorage.getItem("token");
  return (
    <Layout>
      <Switch>
        {isToken === null && <Route path="/signup" exact><Signup /></Route>}
      </Switch>
    </Layout>
  );
}

export default App;
