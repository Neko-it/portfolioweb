import logo from './logo.svg';
import './App.css';
import Video from "./asset/video.mp4";

function App() {
  return (
    <div className="App">
  
      <header className="App-header">
      <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
      </header>
    </div>
  );
}

export default App;
