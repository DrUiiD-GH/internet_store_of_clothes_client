import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";


const App = observer(() =>{
    const {user} = useContext(Context)

    useEffect(()=>{
        check().then(data=>{
            user.setUser(data)
            user.setIsAuth(true)
        })
    },[user])

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
})

export default App;
