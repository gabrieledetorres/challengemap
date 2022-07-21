import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    dados: [
      {
        nome: "Gabi",
        idade: 22,
        musicaPreferida: "love$ick",
        instrumentoPreferido: "violino",
        cidade: "Paulo Afonso",
        mesAniversario: "fevereiro"
      },

      {
        nome: "Fernanda",
        idade: 19,
        musicaPreferida: "Aquarela do Brasil",
        instrumentoPreferido: "viola",
        cidade: "Taguatinga",
        mesAniversario: "dezembro"
      },

      {
        nome: "Carla",
        idade: 26,
        musicaPreferida: "Exagerado",
        instrumentoPreferido: "piano",
        cidade: "Rio de Janeiro",
        mesAniversario: "Julho"
      },

      {
        nome: "Nora",
        idade: 22,
        musicaPreferida: "Adhan",
        instrumentoPreferido: "tambor",
        cidade: "Beirute",
        mesAniversario: "fevereiro"
      },

      {
        nome: "Jamile",
        idade: 35,
        musicaPreferida: "Oração de São Francisco",
        instrumentoPreferido: "violoncello",
        cidade: "Aracaju",
        mesAniversario: "abril"
      },

      {
        nome: "Ana",
        idade: 25,
        musicaPreferida: "Earned It",
        instrumentoPreferido: "Guitarra",
        cidade: "Salvador",
        mesAniversario: "maio"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1> Minha ficha </h1>
        {this.state.dados.map((item) => (
          <div>
            <p>
              Meu nome é {item.nome}, minha idade é {item.idade}, minha música
              preferida é {item.musicaPreferida} meu instrumento preferido é
              {item.instrumentoPreferido}, moro em{item.cidade} o mês do meu
              aniversário é {item.mesAniversario}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
