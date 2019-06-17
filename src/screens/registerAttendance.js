import React from "react";
import {
  faClock,
  faCalendarAlt,
  faMapMarker,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
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

const RegisterAttendance = () => {
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
            <Div style={styles.text}>
              <TextInput label="De" icon={faCalendarAlt} />
              <TextInput label="Até" icon={faCalendarAlt} />
            </Div>
            <Div style={styles.text}>
              <TextInput label="De" icon={faClock} />
              <TextInput label="Até" icon={faClock} />
            </Div>
            <Div style={styles.text}>
              <TextInput label="Endereço" icon={faMapMarker} />
            </Div>
          </Div>
        </Div>
      </Div>
      <Div style={{ flex: 2, height: "100%" }}>
        <Map />
      </Div>
    </Div>
  );
};

export default RegisterAttendance;
