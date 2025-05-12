import styles from './Titlee.module.css';

function Titlees ({ children }) {
  return (
    <div className={ styles.titles }>
        {children} 
    </div>
  )
}

export default Titlees;