import './App.css';
import { Fragment } from 'react';
import Slider from './components/Slider';
import { dips } from './exercises/dips';
import { hinges } from './exercises/hinges';

function App() {
  return (
    <Fragment>
      <Slider slides={hinges} />
    </Fragment>
  );
}

export default App;
