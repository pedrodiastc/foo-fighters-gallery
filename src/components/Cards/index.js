import { useFavoritoContext } from 'Contextos/Favoritos';
import styles from './Card.module.css';
import iconFavorite from './favoriteFull.png'; 
import iconFavoriteEmpty from './favoriteEmpty.png';
import { Link } from 'react-router-dom';

function Cards({ id, title, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext(); // Make sure this matches
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconFavorite : iconFavoriteEmpty;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/player/${id}`}>
        <img src={capa} alt={title} className={styles.capa} />
        <div className={styles.content}>
          <h3>{title}</h3>
        </div>
      </Link>
      
      <img 
        src={icone} 
        alt="Favorite" 
        className={styles.favorite}
        onClick={() => adicionarFavorito({ id, title, capa })}
      />
    </div>
  )
}

export default Cards;