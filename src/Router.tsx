import { Routes,Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";

function Router( ) {
    return (
        <Routes>
            
            <Route path="/" element={<Subscribe/>}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
            <Route path="/interpet/:slug/cadastro"element={<Cadastro />} />
            
        </Routes>)
}

export default Router;