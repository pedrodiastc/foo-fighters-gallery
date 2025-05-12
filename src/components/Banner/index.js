import styles from './Banner.module.css';

function Banner({ imagem }) {
  return (
    <div className={styles.FrontBanner}
    style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/banner-${imagem}.png')` }} >

    </div>
  )
}

export default Banner;