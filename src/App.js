// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     // Removemos a declaração do estado de dentro do construtor
//     // this.state = {
//     //   numeroDeCliques: 0,
//     // };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   // Fazemos a definição do estado utilizando a sintaxe Public Class Field
//   state = {
//     numeroDeCliques: 0,
//   };

//   handleClick() {
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
//     }));
//   }

//   render() {
//     const { numeroDeCliques } = this.state;
//     return (
//       <button type="button" onClick={ (a) => this.handleClick('Teste') }>
//         { numeroDeCliques }
//       </button>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------
// Demonstração de uso do this.state e this.setState de forma correta.

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       numeroDeCliques: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     /* Passando uma callback à função setState, que recebe de parâmetros
//     o estado anterior e as props do componente, você garante que as atualizações
//     do estado acontecerão uma depois da outra! */
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
//     }));
//   }

//   render() {
//     const { numeroDeCliques } = this.state;
//     return (
//       <button
//         type="button"
//         onClick={ this.handleClick }
//       >
//         { numeroDeCliques }
//       </button>
//     );
//   }
// }

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.clickButton1 = this.clickButton1.bind(this);
    this.clickButton2 = this.clickButton2.bind(this);
    // this.clickButton3 = this.clickButton3.bind(this);

    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    }
  }
  
  clickButton1 (corAtualDoBotao) {
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 + 1,
    }))
    corAtualDoBotao === 'verde' ? 
    console.log('Cor do botão 1 : Cinza') : 
    console.log('Cor do botão 1 : Verde');
  }
  
  clickButton2 (corAtualDoBotao) {
    this.setState((qualquerCoisa, seiLa) => ({
      btn2: qualquerCoisa.btn2 + 1,
    }))
    corAtualDoBotao === 'verde' ?
    console.log('Cor do botão 2 : Cinza') :
    console.log('Cor do botão 2 : Verde');
  }
  
  clickButton3 = (corAtualDoBotao) => { // Declaração de função com arrow ja temos o this embutido.
    this.setState((legal1, legal2) => ({
      btn3: legal1.btn3 + 1,
    }))
    corAtualDoBotao === 'verde' ?
    console.log('Cor do botão 3 : Cinza') :
    console.log('Cor do botão 3 : Verde');
  }
  render() {
    const { btn1, btn2, btn3 } = this.state;
    let btn1Color = null;
    let btn2Color = null;
    let btn3Color = null;
    btn1Color = btn1 % 2 === 0 ? 'verde' : 'cinza';
    btn2Color = btn2 % 2 === 0 ? 'verde' : 'cinza';
    btn3Color = btn3 % 2 === 0 ? 'verde' : 'cinza';
    return (
      <>
        <button
          onClick={() => this.clickButton1(btn1Color)}
          className={btn1Color}
        >
          {/* {btn1} */}
        </button>

        <button
          onClick={() => this.clickButton2(btn2Color)}
          className={btn2Color}
        >
          {/* {btn2} */}
        </button>
        
        <button
          onClick={() => this.clickButton3(btn3Color)}
          className={btn3Color}
        >
          {/* {btn3} */}
        </button>
      </>
    );
  };
};

// Introdução a eventos: exercicio 01 e 02

// export default App;

// import React from 'react';
// import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// function handleClick() {
//   console.log('Clicou no botão!')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return <button onClick={handleClick}>Meu botão</button>
//   }
// }

export default App;
