import { Component } from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello World !</h2>
} 

// const Field = () => {
//   const holder = 'Enter here'
//   const styledField = {
//     with: '300px'
//   }
//   return <input 
//           placeholder= {holder}
//           type ='text'
//           style={styledField}/>

// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styledField = {
      width: '300px'
    }
  
  return<input 
          placeholder = { holder }
          type = 'text'
          style = { styledField }/>
  };
}

function Btn () {
  const text = 'Log in';
  // const p = <p>Log in</p>

  // const res = () => {
  //   return 'Log in';
  // }

  const logged = true;

  // return <button>{res()}</button>
  // return <button>{p}</button>
  return <button>{logged ? 'Enter': text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div> 
  );
}

export default App;
