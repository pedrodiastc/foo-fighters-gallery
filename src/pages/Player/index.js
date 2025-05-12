import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titlees from 'components/Title';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';


function Player() {
    const parameters = useParams();
    const [video, setVideo] = useState();

    useEffect(() => {
      fetch(`https://my-json-server.typicode.com/pedrodiastc/react-api/videos?id=${parameters.id}`)
          .then(resposta => resposta.json())
          .then(dados => {
              if (dados && dados.length > 0) {
                  setVideo(dados[0]); // Acessa o primeiro vídeo do array
              } else {
                  setVideo(null); // Caso não encontre nenhum vídeo
              }
          })
          
          .catch(error => {
            console.error("Error to seach for data", error);
            setVideo(null); // Caso ocorra um erro na requisição
        });


  }, [parameters.id]);



    if(!video) {
      return <NotFound/>
    }
    
  return (
    <> 

      <Banner imagem="player" />
        <Titlees>
        <h2 className={styles.videoTitle}>{video.title}</h2>
        </Titlees>
      <section className={styles.container}>

          <iframe 
            width="100%" 
            height="100%" 
            src={video.link} 
            title={video.title}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          </section>  

    </>
  )
}

export default Player;