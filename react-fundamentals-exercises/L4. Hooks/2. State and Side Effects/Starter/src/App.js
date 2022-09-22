import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect} from 'react'


const App = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const [value1, setValu1] = useState(0);
  const [value2, setValu2] = useState(0);
  const [value3, setValu3] = useState(0);
  const [proposedAnswer, setpropsedAnsewer] = useState();

  useEffect(() => {
    console.log("inside use effect");
    const question = makeQuestion();
    refersh(question);
  }, []);

  const makeQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
  };

  const refersh = (question) => {
    setValu1(question[0]);
    setValu2(question[1]);
    setValu3(question[2]);
    setpropsedAnsewer(question[3]);
  };

  const isCorrect = (boolAnswer) => {
    const sum = value1 + value2 + value3;
    if (boolAnswer) {
      return proposedAnswer === sum;
    } else {
      return proposedAnswer !== sum;
    }
  };

  const answerHandler = (e) => {
    const correct = parseInt(e.target.id) ? true : false;
    if (isCorrect(correct)) {
      // update correct answers number
      setNumCorrect(numCorrect + 1);
    }
    // update total question number
    setNumQuestions(numQuestions + 1);

    const newQuestion = makeQuestion();
    refersh(newQuestion);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button id="1" onClick={answerHandler}>
          True
        </button>
        <button id="0" onClick={answerHandler}>
          False
        </button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;
