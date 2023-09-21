import "./index.scss"
import meuCimento from "./public/cimento.webp";
import materias from "./public/jls.jpg";

for(let i=1; i<=1; i++){
    alert("Deixe o seu contato")
}

const Contato = () => {
  return (

      <div className="Principal">
        
          <div className="logocimento">
                <img src={meuCimento}/><p>
                </p>
                <h5>Promoções imperdiveis!</h5>
          </div><p>

          </p>
          
        <form action="https://formspree.io/f/xyyqnden"method="POST">
            <label>Nome:</label><br/>
            <input type="text" name="nome" placeholder="nome" required="required"/><br/>
            <label>Sobre Nome:</label><br/>
            <input type="text" name="sobre nome" placeholder="sobre nome" required="required"/><br/>
            <label>Contato:</label><br/>
            <input type="tel" name="fone" placeholder="contato" required="required"/><br/>
            <label>Email:</label><br/>
            <input type="email" name="email" placeholder="email" required="required"/><br/>
            <button type="submit">Enviar</button>
        </form><p>

        </p>
        <div className="logomaterias">
                <img src={materias}/><p>
                </p>
                <h5>Venha conhecer nossa Loja!</h5>
          </div>
    </div>
  )
}

export default Contato;

