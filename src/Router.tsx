import { Routes,Route } from "react-router-dom";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";

function Router( ) {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
        </Routes>)
}

export default Router;