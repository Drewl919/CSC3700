import './App.css';
import {AuthProvider} from "./auth";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Books from "./Books";
import Create from "./Create";
import NotFound from "./NotFound";
import BookDetailsWUpdate from "./BookDetailsWUpdate";
import BookUpdateV2 from "./BookUpdateV2";
import Profile from "./Profile";
import Login from "./Login";


function App() {
  return (
      <div className="App">
          <AuthProvider>
          <NavBar />
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Books/>
                      </Route>
                      <Route path="/create">
                          <Create/>
                      </Route>
                      <Route path="/books/:id">
                          <BookDetailsWUpdate/>
                      </Route>
                      <Route path="/BookUpdate/:id">
                          <BookUpdateV2/>
                      </Route>
                      <Route path="/Profile">
                          <Profile/>
                      </Route>
                      <Route  path="/Login">
                          <Login/>
                      </Route>
                      <Route  path="*">
                          <NotFound/>
                      </Route>
                  </Switch>
              </Router>
          </AuthProvider>
      </div>
  );
}

export default App;
