import React, {Component} from "react";
import Header from "./componentes/Header"

class App extends Component{
  
 /*  state = {
    noticias: []
  } */

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=9c8713da4065456184a1e5bbc953c940';
  
/*     console.log(url)
 */
    fetch(url)
    .then(respuesta=>{
      return respuesta.json
    })
    .then(noticias =>{
/*       console.log(noticias.articles)
 */      this.setState({
       noticias : noticias.articles
     })  
    }) 

  }

  render(){ 
  return (
    <div className="App">
      <Header
      titulo = 'Noticias'
      />

    </div>
  );
}
}
export default App;
