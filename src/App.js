import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/landing";
import AddReviewPage from "./pages/add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/reviews/list" exact>
            <p>review lists</p>
          </Route>
          <Route path="/reviews/add" exact>
            <AddReviewPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
