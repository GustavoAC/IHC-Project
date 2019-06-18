import React, { Component } from "react";
import {
  faClock,
  faCalendarAlt,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import Div from "../components/Div";
import TextInput from "../components/TextInputWLabel";
import Text from "../components/Text";
import Map from "../components/Map";
import Button from "../components/Button";

const styles = {
  header: {
    padding: "20px 0",
    width: "100%",
    justifyContent: "center"
  },

  text: {
    padding: "5px 0"
  }
};

class RegisterAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = props.isEdit
      ? {
          name: "Atendimento Odontológico da UFRN",
          category: { label: "Odontologia", value: "Odontologia" },
          deDate: "10/05/2019",
          ateDate: "10/09/2019",
          deHour: "12:00",
          ateHour: "18:00",
          address: "Av. Sen. Salgado Filho, 3000 - Candelária, Setor 4"
        }
      : {};
  }

  render() {
    return (
      <Div
        style={{
          flexDirection: "row",
          height: "100%",
          alignItems: "center"
        }}
      >
        <Div style={{ justifyContent: "flex-end", flex: 3 }}>
          <Div
            style={{
              flexDirection: "column",
              width: "600px",
              marginRight: "20px"
            }}
          >
            <Div style={styles.header}>
              <Text fontSize="30px" fontWeight="bold" toCenter>
                Cadastrar Ponto de Atendimento
              </Text>
            </Div>
            <Div style={{ flex: 1, flexDirection: "column" }}>
              <Text>Categoria</Text>
              <Select
                className="select"
                isSearchable
                value={this.state.category}
                options={[
                  { label: "Odontologia", value: "Odontologia" },
                  { label: "Geriatria", value: "Geriatria" },
                  { label: "Psicologia", value: "Psicologia" },
                  { label: "Psiquiatria", value: "Psiquiatria" }
                ]}
                onChange={i =>
                  this.setState(prevState => ({ ...prevState, category: i }))
                }
              />
              <Div style={styles.text}>
                <TextInput
                  label="Descrição do Ponto"
                  value={this.state.name}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, name: i }))
                  }
                />
              </Div>
              <Div style={styles.text}>
                <TextInput
                  customStyle={{ marginRight: "10px" }}
                  value={this.state.deDate}
                  label="De"
                  icon={faCalendarAlt}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, deDate: i }))
                  }
                />
                <TextInput
                  customStyle={{ marginLeft: "10px" }}
                  value={this.state.ateDate}
                  label="Até"
                  icon={faCalendarAlt}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, ateDate: i }))
                  }
                />
              </Div>
              <Div style={styles.text}>
                <TextInput
                  customStyle={{ marginRight: "10px" }}
                  label="De"
                  value={this.state.deHour}
                  icon={faClock}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, deHour: i }))
                  }
                />
                <TextInput
                  customStyle={{ marginLeft: "10px" }}
                  label="Até"
                  value={this.state.ateHour}
                  icon={faClock}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, ateHour: i }))
                  }
                />
              </Div>
              <Div style={styles.text}>
                <TextInput
                  label="Endereço"
                  icon={faMapMarker}
                  value={this.state.address}
                  onChange={i =>
                    this.setState(prevState => ({ ...prevState, address: i }))
                  }
                />
              </Div>
              <Button href="/" type="green" text="Salvar" />
            </Div>
          </Div>
        </Div>
        <Div style={{ flex: 2, height: "100%" }}>
          <Map markers={[{ position: { lat: -5.836777, lng: -35.203402 } }]} />
        </Div>
      </Div>
    );
  }
}

export default RegisterAttendance;
