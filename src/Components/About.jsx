import "./about.css";

function Card(){
    const myInfo = {
        nombre: "Ma. Azucena Peredo Aguilar",
        formacion: "Lic. en Biología // MRes en Tecnología Biomolecular // Java Full Stack Developer",
        contacto: "azucena.peredo9@gamil.com",
        descripcion: " Mi formación en Ciencias Biológicas me dio la oportunidad de acercarme al sector IT en un principio a través del estudio de fenómenos biológicos con herramientas computacionales. Posteriormente incursioné en el desarrollo web con la ayuda de Generation y hoy formo parte del equipo de S-Tu-Arte.",
    };
    return (
        <div className="cardP">
            <img src="../assets/foto Monet (1).jpeg" width="200px" height="200px"></img>
            <h2>{myInfo.nombre}</h2>
            <h5>{myInfo.contacto}</h5>
            <h6>{myInfo.formacion}</h6>
            <p>{myInfo.descripcion}</p>
        </div>
    )
    
}

export default Card;