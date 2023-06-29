import Testimonio from './componentes/Testimonio'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <h1>PRIMERA PRUEBA DE COMPONENTES</h1>
     <Testimonio
     nombre="Agustina Munios"
     pais="Argentina"
     imagen="1"
     cargo="Ingeniera de software"
     empresa="Spotify"
     testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus culpa officiis iure ducimus maiores quaerat cum, repellendus hic quis inventore saepe, distinctio ipsam earum. Atque voluptate commodi consectetur similique."
     />

<Testimonio
     nombre="Clarivel Beron"
     pais="EEUU"
     imagen="2"
     cargo="Analista de datos"
     empresa="Amazon"
     testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus culpa officiis iure ducimus maiores quaerat cum, repellendus hic quis inventore saepe, distinctio ipsam earum. Atque voluptate commodi consectetur similique."
     />

      </div>
    
    </div>
  );
}

export default App;
