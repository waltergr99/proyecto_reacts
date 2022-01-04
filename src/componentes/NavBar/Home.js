

const Home = () => {
  const hacerClick = () => {
    console.log("HOLA DESDE EL CLICK")
}

  return (
    
    <div>

      <h1> HOLA </h1>    

     <button onClick={hacerClick}>click</button>

    </div> 
    )

}

export default Home