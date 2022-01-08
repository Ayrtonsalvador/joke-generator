import './App.css';
import { useRef, useState } from 'react';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Monsieur');
  const [lastName, setLastName] = useState('X');

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <center>

        <h1>The Joke Generator</h1>
        <h4>{joke}</h4>

        <form>
          <input placeholder='first name' 
                 ref={firstNameRef} />
          <input placeholder='last name'
                 ref={lastNameRef} />

          <button className='button-generate'
                  onClick={generateJoke}>Generate Joke
          </button>
        </form>

      </center>
    </div>
  );
}

export default App;
