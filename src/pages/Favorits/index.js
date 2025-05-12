import styles from './Favorits.module.css';
import Banner from 'components/Banner';
import Cards from 'components/Cards';
import Titlees from 'components/Title';
import { useFavoritoContext } from 'Contextos/Favoritos';

function Favorits () {
  const { favorito } = useFavoritoContext();

  return (
    <>
        <Banner imagem="favoritos" />

        <Titlees> 
          <h1> My favorits </h1>
       </Titlees>

        <section className={styles.container}>
           { favorito.map((fav) => {
              return <Cards {...fav} key={fav.id}/>
           }) }        
        
        </section>


    </>
  )
}

export default Favorits;