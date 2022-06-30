import Control from "./components/Control";
import Counter from "./components/Counter";
import Display from "./components/Display";
import './App.css'
import SettingsBar from "./components/SettingsBar";
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container className='App' style={{height:window.innerHeight}}>
      <Counter />
      <Display />
      <Control />
      <SettingsBar />
    </Container>
  );
}

export default App;
