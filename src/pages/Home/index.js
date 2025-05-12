import Banner from "components/Banner";
import Titlees from "components/Title";
import Cards from "components/Cards";
import styles from './Home.module.css';
import { useEffect, useState } from "react";



function Home(){
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/pedrodiastc/react-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])


  return(
    <>

      <Banner imagem="home" />
        <Titlees> 
          <h1> Best FooFighters concerts </h1>
       </Titlees>
       
        <section className={styles.container}>
          {Videos.map((video) => {
             return <Cards {...video} key={video.id} />
          })}
        </section>
        
      
      </>
  )
}

export default Home;