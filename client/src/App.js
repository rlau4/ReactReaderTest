import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div>
      <Nav>
      <Switch>
        <Route exact path = "/" component={Books} />
        <Route exact path ="/books" component={Books}/>
        <Route exact path ="/boos:id" component = {Detail}/>
        <Route component={NoMatch}/>
      </Switch>
      </Nav>
    </div>
    </Router>
  );
}
export default App;
