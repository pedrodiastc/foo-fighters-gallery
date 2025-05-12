import Container from "components/Container";
import Footeer from "components/Footer";
import Headeer from "components/Header";
import FavoritosProvider from "Contextos/Favoritos";
import { Outlet } from "react-router-dom";




function Basepage() {
  return (
    <main>
    <Headeer/>

    <FavoritosProvider>
      <Container>
      <Outlet/>
      </Container>
    </FavoritosProvider>

    <Footeer/>


    </main>
  )
}


export default Basepage;