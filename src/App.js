import './App.css';
import styled from '@emotion/styled'
import hero from '../src/imgs/hero_img.jpg'
import logo from '../src/imgs/logo.svg'
import BoxTranslate from './components/BoxTranslate';
import BoxContainer from './components/BoxContainer';

const BackgroundImage = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -100;
`

const Logo = styled.img`
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
`

function App() {
  return (
    <div className="App">
      <BackgroundImage src={hero} />
      <Logo src={logo}/>
      <BoxContainer/>
    </div>
  );
}

export default App;
