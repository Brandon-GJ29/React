import UserInput from "./components/UserInput.jsx";
import UserResult from "./components/userResult.jsx";
import { useState } from "react";

import {calculateInvestmentResults} from "./util/investment.js"


function App() {
  const [inputs, setInputs] = useState({
    inversionInicial: 10000,
    inversionAnual: 1200,
    returnExpected: 6,
    durationYear: 10,

  });
  const inputInvalid = inputs.durationYear>=1;

   function handleInputChange(name, value) {
      setInputs(prev=>(
        {...prev,
        [name] : value,}
      ));
    }
  const annualData = calculateInvestmentResults({
    initialInvestment: inputs.inversionInicial,
    annualInvestment: inputs.inversionAnual,
    expectedReturn: inputs.returnExpected,
    duration: inputs.durationYear,
  });

  console.log(annualData);
  return (
    <main>
      <div id="user-input">
        <ol className="input-group">
          <UserInput nameTag='Inversion Inicial'
            value ={inputs.inversionInicial}
            onInputChange={value => handleInputChange('inversionInicial', value)} 
          />
          <UserInput nameTag= 'Inversion Anual'
             value ={inputs.inversionAnual}
            onInputChange={value => handleInputChange('inversionAnual', value)} 
          
          />
          <UserInput nameTag= 'Retorno Esperado'
             value ={inputs.returnExpected}
            onInputChange={value => handleInputChange('returnExpected', value)} 
          
          />
          <UserInput nameTag= 'Años'
             value ={inputs.durationYear}
            onInputChange={value => handleInputChange('durationYear', value)} 
          
          />
      
        </ol>
      </div>
      <div id="result">
        {!inputInvalid && <p>Ingresa un valor valido</p>}
        {inputInvalid && <UserResult result={annualData}/>}

      </div>

    </main>
   
  );
}

export default App
