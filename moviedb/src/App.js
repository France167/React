import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalContextProvider } from "./context/GlobalContext";
import Footer from "./components/Footer";
import {useGlobalContext} from "./context/GlobalContext"

function App() {
  const {currentMovies} = useGlobalContext()
  return (
    <GlobalContextProvider>
      <div className="App">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;

// api_key = 1ac2aba9270704bf465b9c3a770cb6f8
// url upcoming movies = https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&page=1
// movie details url = https://api.themoviedb.org/3/movie/{movie_id}?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US
