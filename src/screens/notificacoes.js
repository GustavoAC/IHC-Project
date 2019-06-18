import React, { Component } from "react";
import Div from "../components/Div";
import List from "../components/List";
import Text from "../components/Text";
import CategoryCard from "../components/CategoryCard";

const retrieveKey = item => {
  return item.name;
};

const mockData = [
  { name: "Odontologia" },
  { name: "Geriatria" },
  { name: "Psicologia" },
  { name: "Psiquiatria" }
];

class Notificacoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = item => {
    return (
      <CategoryCard
        name={item.name}
        isChecked={this.state[item.name]}
        onClick={() => this.toggleState(item.name)}
      />
    );
  };

  toggleState = name => {
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };

  render() {
    return (
      <Div style={{ flexDirection: "column" }}>
        <Div
          style={{
            padding: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text fontSize="30px" fontWeight="bold" toCenter>
            Selecione as categorias de que deseja ser notificado
          </Text>
          <Text fontSize="16px" toCenter>
            Nós lhe notificaremos via e-mail quando novos pontos forem
            adicionados ao sistema.
          </Text>
        </Div>
        <Div style={{ width: "1000px", alignSelf: "center" }}>
          <List
            data={mockData}
            render={this.renderItem}
            retrieveKey={retrieveKey}
          />
        </Div>
      </Div>
    );
  }
}

export default Notificacoes;
