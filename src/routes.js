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
               <Route index element={<Home />} />
               <Route path="favoritos" element={<Favorits />} />
               <Route path="player/:id" element={<Player />} /> {/* More explicit path */}
               <Route path="*" element={<NotFound />} />
           </Route>
       </Routes>
   </BrowserRouter> 
  )
}

export default AppRoutes;