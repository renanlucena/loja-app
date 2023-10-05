import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"

const Fundo = styled.div` background: #5A57FF;
width: 100%;
min-height: 100vh;
 `

function App() {
 

  return (
   <Fundo>
    <EstilosGlobais/>

   </Fundo>
  )
}

export default App
