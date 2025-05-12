import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Favorits from "pages/Favorits";
import Home from "./pages/Home";
import Player from "pages/Player";

// COMPONENTS

import NotFound from "pages/NotFound";
import Basepage from "pages/Basepage";




function AppRoutes() {
   return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
    
          <Routes>
            <Route path="/" element={<Basepage />}>

              <Route index element={<Home />}></Route>
              <Route path="Favoritos" element={<Favorits />}></Route>
              <Route path=":id" element={<Player />}></Route>
              <Route path="*" element={<NotFound />}></Route>

            </Route>


          </Routes>
        
    </BrowserRouter> 
    )
}

export default AppRoutes;