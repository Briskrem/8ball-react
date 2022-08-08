
import EightBall from './EightBall'
import {answers} from './answers'
import './App.css';

function App() {
  return (
    <div className="App">
        <EightBall  answers={answers}/>
    </div>
  );
}

export default App;
