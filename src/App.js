import "./App.css";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import Login from "./components/Login";

// Context API
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
