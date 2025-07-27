import { use } from "react";
import UserInput from "./components/UserInput.jsx";
import UserResult from "./components/userResult.jsx";
import { useState } from "react";

function App() {
  const [inversionInicial, setInversionInicial] = useState('');
  
   function handleInputChange(value) {
      setInversionInicial(value);
    }
  return (
    <main>
      <div id="user-input">
        <ol className="input-group">
          <UserInput nameTag='Inversion Inicial'
            value ={inversionInicial}
            onInputChange={handleInputChange}
          />
          <UserInput nameTag= 'Inversion Anual'/>
          <UserInput nameTag='Expected Return'/>
          <UserInput nameTag= 'Duration'/>
        </ol>
      </div>
      <div id="result">
        <UserResult nameColum={"Year"} result={inversionInicial}/>
        <UserResult nameColum={"Investment value"}/>
        <UserResult nameColum={"Interest (year)"}/>
        <UserResult nameColum={"Total Interest"}/>
        <UserResult nameColum={"Invested Capital"}/>

      </div>

    </main>
   
  );
}

export default App
