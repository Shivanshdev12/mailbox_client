import Layout from "./components/Layout/Layout";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Inbox from "./components/Inbox/Inbox";
import Sent from "./components/Sent";
import MailPage from "./components/MailPage/MailPage";
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
        {isToken !== null && <Route path="/home" exact><Home /></Route>}
        {isToken !== null && <Route path="/inbox" exact><Inbox /></Route>}
        {isToken !== null && <Route path="/inbox/:id" exact><MailPage isSentBoxMail={false} /></Route>}
        {isToken !== null && <Route path="/sent" exact><Sent /></Route>}
        {isToken !== null && <Route path="/sent/:id" exact><MailPage isSentBoxMail={true} /></Route>}
        {<Route path="*">
          <Redirect to="/login" />
        </Route>}
      </Switch>
    </Layout>
  );
}

export default App;
