import './App.css';
import { Fragment } from 'react';
import Slider from './components/Slider';
import { dips, hinges } from './exercises';

function App() {
  return (
    <Fragment>
      <Slider slides={hinges} />
      <Slider slides={dips} />
    </Fragment>
  );
}

export default App;
