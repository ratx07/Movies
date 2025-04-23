import "../src/assets/css/App.css";
import Home from "./assets/pages/Home";
import Favorite from "./assets/pages/Favorite";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { MovieProvider } from "./assets/components/context/MovieContext";
import ErrorBoundary from "./assets/components/ErrorBoundry";

function App() {
  return (
    <ErrorBoundary>
      <MovieProvider>
        <Navbar />
        <main className="main-cintent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>
    </ErrorBoundary>
  );
}

export default App;
