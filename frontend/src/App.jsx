import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LandingPage from "./screens/LandingPage/LandingPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
