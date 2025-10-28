import { Background, Foto, Buttons, Error } from "./styles/Home.styles"
import {GlobalStyle} from "./styles/Global.js"


export default function App() {
  return (
    <>
    <Background id="back">
      <Foto></Foto>
      <h1>Felipe Lira dos Santos</h1>
      <h2>São Paulo, Brasil</h2>
      <p>See more about me:</p>
      
      <Buttons>
        <a href="https://www.instagram.com/lira__felps/" target="_blank" rel= "noopener" > Instagram</a>
        <a href="https://www.linkedin.com/in/felipe-lira-b31535290/" target="_blank" rel= "noopener"> LinkedIn</a>
        <a href="https://github.com/F3lkis" target="_blank" rel= "noopener"> GitHub</a>
        <a href="http://lattes.cnpq.br/7433583054149848" target="_blank" rel= "noopener"> Lattes</a>
      </Buttons>
    </Background>
    <Error>
      <h1>unsupported format</h1>
    </Error>
    <GlobalStyle/> 
    </>
    
  )
}
