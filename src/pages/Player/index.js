import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titlees from 'components/Title';
import { useParams } from 'react-router-dom';
//import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';


function Player() {
  const parameters = useParams();
  const [video, setVideo] = useState(); // Initialize as null instead of undefined

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/pedrodiastc/react-api/videos?id=${parameters.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados && dados.length > 0) {
                setVideo(dados[0]);
            } else {
                setVideo(null); 
            }
        })
        .catch(error => {
          console.error("Error to search for data", error);
          setVideo(null);
      });
  }, [parameters.id]);

  if (!video) {
      return <div className={styles.loading}>Loading or not found...</div>;
      // Or return <NotFound /> if you prefer
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
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen> 
              </iframe>
          </section>  
      </>
  )
}

export default Player;