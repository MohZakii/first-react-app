import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PostsPage from "./pages/Posts";
import NotFoundPage from "./pages/NotFound";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/posts/*" element={<PostsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
