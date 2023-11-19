import React from 'react';
import './index.scss';

const Modal = ({modalState,setModalState,children})=>(
  // <div className="overlay">
  <div className={`overlay animated ${modalState ? 'show' :''}`}> 
  <div className="modal">
    <svg onClick={() => { setModalState(false) }} height="200" viewBox="0 0 200 200" width="200">
      <title />
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
    {children}
    
  </div>
</div>
)

function App() {
  const [modalState, setModalState] = React.useState(false);
  console.log(modalState);
  return (
    <div className="App">
      <button onClick={() => { setModalState(true) }} className="open-modal-btn">✨ Открыть окно</button>
      

      {/* { modalState && <Modal modalState={modalState} setModalState={setModalState}/> } */}
      
      <Modal modalState={modalState} setModalState={setModalState}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <h3>Modal</h3>
      </Modal>


    </div>
  );
}

export default App;
