import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
