import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';
import '../VerTodasP/VerTodasP.css'

class VerTodasP extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculasPopulares: [],
      filterBy:'',
      filtradas: [],
      favoritos:[]
    };
  }    

  componentDidMount(){
    this.setState({favorito: localStorage.getItem('favoritos') || []})
      const url = "https://api.themoviedb.org/3/movie/popular?api_key=93e508f17b507f9418365fe0a4069252"
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              return this.setState({
              peliculasPopulares: datos.results,})})
          .catch( err => console.log(err))
        
   }
  
   filtrarPeliculas(filtro){

    if(filtro=== ''){
      return 
    }
    else{
  
  
      const url = `https://api.themoviedb.org/3/search/movie/?api_key=93e508f17b507f9418365fe0a4069252&query=${filtro}`
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              
              this.setState({filtradas: datos.results})
  
          })
          .catch( err => console.log(err))
        }
   }
   handleFavoritos(pelicula){

    console.log(this.state.favoritos)
    if (this.state.favoritos.some(fav => pelicula.id === fav.id)){
    console.log("agregar a favoritos")
    this.setState({favoritos: this.state.favoritos.filter( peli => peli.id !== pelicula.id)}, ()=>{
      localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
      console.log("quitar de favoritos")
  })
  console.log(this.state.favoritos.filter( peli => peli.id !== pelicula.id))
    }else{
  this.setState(
    {favoritos:[...this.state.favoritos, pelicula]}, ()=>
  { localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
  console.log("quitar de favoritos")
  })
   }
  }
  
   handleChange(e){
    this.setState({
      filterBy: e.target.value
    },()=>{
      this.filtrarPeliculas(this.state.filterBy)
    })
   }

 render() {
  return (
  <>
   <div className='Contenedor'> 
      <form className='buscador'>
        <label >Buscar</label>
        <input
          type="search"
          name="buscar"
          onChange={(e)=>{this.handleChange(e)}}
          value={this.state.filterBy}
        />
      </form>
      </div>
    
      {this.state.filterBy===""?<>
    <h2> Todas las Peliculas Populares</h2>
    
    <div className='homePeliculasPopulares'>
{this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
      this.state.peliculasPopulares.map(peliculaPopular =>(
          <Pelicula 
           key={peliculaPopular.id}
           pelicula={peliculaPopular}
           favorito={(peliculaPopular)=> this.handleFavoritos (peliculaPopular)}
           />)
     
          )
      
      )
      
}
  </div></>   :  <>   <div className='card-container'>
      {this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.filtradas.map(filtrada =>(
            <Pelicula 
        
             key={filtrada.id}
             pelicula={filtrada}
             favorito={(filtrada)=> this.handleFavoritos (filtrada)}
             />)
       
            )
        
        )
        
          }
    </div> 

    </>}

</>    
  ) 
}


}
export default VerTodasP