import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mediabox from "./components/Mediabox";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col pt-24">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Mediabox />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Provider>
  );
}

export default App;
