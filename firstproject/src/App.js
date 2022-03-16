import "./App.css";
import Post from "./components/Post";
import Admin from "./components/Admin";
const post = {
  title: "Magna Grecia",
  date: "22 de Agosto de 2026",
  content: "Sint Laborum sit dou culpa",
};

const isAdmin = true;

function App() {
  return (
    <div className="App">
      {isAdmin ? (
        <div>
          <Admin />
          <Post post={post} />
        </div>
      ) : (
        <strong> You are not an admin</strong>
      )}
    </div>
  );
}

export default App;
