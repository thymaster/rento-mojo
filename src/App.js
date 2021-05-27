import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Posts } from "./screens/Posts";
import { PostDetails } from "./screens/PostDetails";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
    <TopNav />
    <div className="App">
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Posts">
          <Post />
        </Route>
        <Route path="/PostDetails">
          <PostDetails />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
