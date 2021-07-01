const Resultado = () => {
    return ( 
        <section className="respuesta">
            <article className="biografia">
                <h2>Nombre de  artista</h2>
                <div className="bio_general">
                    <div className="bio_imagen">
                        <img src="./images/imagenDefault.png" alt="" />
                    </div>
                    <div className="bio_datos">
                        <p>Fecha de nacimiento</p>
                        <p>Origen</p>
                        <p>Sitio web</p>
                        <p>Fecha de nacimiento</p>
                        <p>Origen</p>
                        <p>Sitio web</p>
                    </div>
                </div>
            </article>

            <article className="cancion">
                    <h2>Letra de la cancion</h2>
                    <p>Lorem ipsum dolor sit amet <br/>
                            consectetur <br/>
                            adipisicing elit. Nisi quibusdam <br/>
                            fugiat molestiae <br/>
                            ab sit illo facilis quod eius <br/>
                            aliquam mollitia! <br/>
                            Soluta repellat porro,<br/> 
                            et consequuntur cum architecto <br/>
                            ad iure delectus.
                    </p>
            </article>
        </section>
     );
}
 
export default Resultado;