import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Hotels, HotelDetails } from "./pages";

const App = () => {
  return (
    <main className="w-full max-w-7xl min-h-screen mx-auto overflow-hidden bg-blue-50 flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/property/:id" element={<HotelDetails />} />
      </Routes>
    </main>
  );
};

export default App;
