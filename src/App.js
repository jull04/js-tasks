import React from 'react';
import './App.css';

function App() {
  // Создаем массив с пятью элементами
  const blocks = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="App">
      <header className="App-header">
        <p>Js tasks</p>
        <div id="container">
          {blocks.map((block) => (
            <div
              key={block}
              className="box"
              onClick={() => alert("this is box #" + block)}
              style={{
                width: '100px',
                height: '100px',
                margin: '10px',
                backgroundColor: 'lightblue',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: '100px',
                cursor: 'pointer'
              }}
            >
              Box #{block}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

