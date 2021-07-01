import React,{useState,useEffect} from 'react';
import Form from "./Form"
import Footer from "./Footer"
import Resultado from "./Resultado"
import Loading from './Loading';
//Traemos el helpers
import axios from 'axios';
const AppBuscar = () => {

    const [busqueda,setBusqueda] = useState(null); //Estado del valor de los inputs
    const [cancion,setCancion] = useState(null); //Estado de la cancion del artista
    const [bio,setBio] = useState(null); //Estado de la bio del artista
    const [loading,setLoading] = useState(false);

    
    useEffect(()=>{
        if(busqueda === null){
            return; 
        }
        let peticionGet =  async()=>{
            //Si solo pongo la api del artista me trae la data, pero si pongo ademas la otra api ya no las trae, como que la bloquea
            await axios.all([
              axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busqueda.artista}`),
               axios.get(`https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`),
            ])
            .then(
                axios.spread((artist,canc)=>{
                    console.log(artist)
                    console.log(canc)
                    setBio(artist)
                    setCancion(canc)
                })
            ).catch(e=>console.log(e))    
        }
            
        
        peticionGet();
        console.log(cancion,bio);  //resultados de la api
    },[busqueda]);

    const handleForm = (datos) => { //Obtiene el valor de los campos inputs
        setBusqueda(datos)
    }


    return (
        <>  
        <section className="buscador">
            <h1>Buscá tu canción <i className="fas fa-music"></i></h1>
             <Form //Traemos los valores mandados por el form
                handleForm = {handleForm}
             />
            <div className="wave"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-88.88,-30.09 C209.08,151.47 302.20,-68.58 592.83,36.02 L500.00,150.00 L0.00,150.00 Z" ></path></svg></div>
       </section>

        {loading && <Loading /> } 
    
        <Resultado />

        <Footer />
        </>
      );
}
 
export default AppBuscar;