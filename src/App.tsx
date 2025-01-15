import './App.css';
import ReactApi from './ReactApi';
// ButtonHandler, InputHandler
import { ButtonHandler, InputHandler } from './ReactEventHandler';

function App() {
  return (
    <>
      <ReactApi />
      <ButtonHandler />;
    </>
  );
}

export default App;
