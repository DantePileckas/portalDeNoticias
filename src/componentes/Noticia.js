import React from "react";
import Proptypes from "prop-types";

const Noticia = (props) => {
  
    const {urlToImage, url, title, description, source} = props.noticia;

    return(
    <div className="col s12 m6 l4">
        <div className="card">

            <div className="card-image">
                <img src={urlToImage} alt={title}/>
                <span className="card-title"> {source.name} </span> 
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="card-action">
                <a href={url} target="_blank"
                className="waves-effects waves-light btn">
                Noticia Completa
                </a>
            </div>

        </div>
    </div>
)
}

Noticia.propTypes ={
    noticia: Proptypes.shape({
        urlToImage: Proptypes.string,
        url:Proptypes.string,
        title:Proptypes.string,
        description:Proptypes.string,
        source:Proptypes.object
    })
}


export default Noticia;