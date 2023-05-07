import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Container, Spinner} from "react-bootstrap";


const App = observer(() =>{
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            check().then(data=>{
                user.setUser(data)
                user.setIsAuth(true)
            }).finally(()=>setLoading(false))
        }, 1000)

    },[])

    if(loading){
        return <Container style={{height:900}} className="d-flex justify-content-center align-items-center"><Spinner animation={"grow"} className={'m-auto'}/></Container>
    }

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
})

export default App;
