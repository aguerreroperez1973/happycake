import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <div>
      <Navigation />
        <Routes>
            <Route path="/contacto" element={<ContactPage />}></Route>
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
};
export default App;
