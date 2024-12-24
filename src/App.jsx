import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mediabox from "./components/Mediabox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mediabox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
