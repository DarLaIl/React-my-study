import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper color='lightblue'>
        <h2>Text</h2>
      </Wrapper>
      <Wrapper color='lightgreen'>
        <h2>Another text</h2>
      </Wrapper>
      <Wrapper color='lightyellow'>
              <h2>Some more text</h2>
              <p>Some description</p>
              <button>And a button</button>
      </Wrapper>
    </div>
  );
}

export default App;
