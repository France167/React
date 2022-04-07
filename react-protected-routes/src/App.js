import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./views/Login";
import RequireAuth from "./components/RequireAuth";
import Home from "./views/Home";
import About from "./views/About";
import Profile from "./views/Profile";
import Missing from "./Missing";

function App() {
  return (
    <Routes>
      {/*public routes */}
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />

        {/*protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        
         {/*missing routes */}
         <Route path="*" element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
