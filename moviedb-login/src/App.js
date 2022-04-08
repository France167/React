import "./App.css";
import { Route, Routes } from "react-router-dom";
import Peliculas from "./views/Peliculas";
import Details from "./views/Details";
import Error from "./views/Error";
import Login from "./views/Login";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Peliculas />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

// api_key = 1ac2aba9270704bf465b9c3a770cb6f8
// url upcoming movies = https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&page=1
// movie details url = https://api.themoviedb.org/3/movie/{movie_id}?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US
