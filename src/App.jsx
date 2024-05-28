import logo from "./assets/react.svg"
import ReactPlayer from 'react-player'
import Calculator from "./Components/Calculator";


function App() {

  const vidUrl = "https://www.youtube.com/watch?v=yopXd2fOams";


  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }


  return (
    <div className="App">
      {/* <h1>Task: Add an image below</h1>
      <img style={{marginLeft: "300px"}} src={logo} alt="Logo" />
    
      {/* <ReactPlayer url={vidUrl} playing={false} volume={0.6}  /> */}
    
      {/* <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>  */}
    
      <Calculator />

    </div>
  );
}

export default App;

