import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const url = 'http://localhost:8004/poems'

  const [poemForm, setPoemForm] = useState(false)
  const [poems, setPoems] = useState([])
  

  function handleNewPoem(poem){
    const headerData = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(poem)
    }
    
    fetch(url, headerData).then(res => res.json())
      .then(data => setPoems([...poems, data]))
  }

  function handlePoemForm(){
    setPoemForm(poemForm => !poemForm)
  }

  useEffect(() => {
    fetch(url).then(res => res.json())
      .then(data => setPoems(data))
  }, [])

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handlePoemForm}>Show/hide new poem form</button>
        {poemForm ? <NewPoemForm handleNewPoem={handleNewPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
