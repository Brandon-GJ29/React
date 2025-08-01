import {userState, useState} from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';

function App() {
 
  useState();
  // const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedBotton){
        setSelectedTopic(selectedBotton);
       // console.log(selectedTopic);
    }
  let tabContent=<p>Please select a topic</p>;
  if(selectedTopic){
    tabContent=(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            {/* 
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}  
            />
             <CoreConcept {...CORE_CONCEPTS[1]}/>
             <CoreConcept {...CORE_CONCEPTS[2]}/>
             <CoreConcept {...CORE_CONCEPTS[3]}/>
            */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* Se usa diferente a core concept porque solo se maneja un atributo en la funcion*/}
            {/*<TabButton>Components</TabButton>*/}
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
