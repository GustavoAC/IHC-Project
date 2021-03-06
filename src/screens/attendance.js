import React from "react";
import {
  faClock,
  faMapMarker,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
import Div from "../components/Div";
import Text from "../components/Text";
import Map from "../components/Map";
import Button from "../components/Button";

const styles = {
  header: {
    padding: "20px",
    width: "100%",
    justifyContent: "center"
  },

  text: {
    padding: "5px 0"
  }
};

const Attendance = () => {
  return (
    <Div
      style={{
        flexDirection: "column",
        height: "100%",
        alignItems: "center"
      }}
    >
      <Div style={{ flexDirection: "column", width: "800px", padding: "20px" }}>
        <Div style={styles.header}>
          <Text fontSize="30px" fontWeight="bold" toCenter>
            Atendimento Odontológico da UFRN
          </Text>
        </Div>
        <Div>
          <Div style={{ flex: 1, flexDirection: "column" }}>
            <Div style={styles.text}>
              <Text icon={faClock}>13:00 - 17:00</Text>
            </Div>
            <Div style={styles.text}>
              <Text icon={faMapMarker}>
                Av. Sen. Salgado Filho, 3000 - Candelária, Setor 4
              </Text>
            </Div>
          </Div>
          <Div style={{ flex: 1, justifyContent: "flex-end" }}>
            <Button type="green" icon={faShareAlt} text="Compartilhar" />
          </Div>
        </Div>
      </Div>
      <Div style={{ flex: 1, width: "100%" }}>
        <Map />
      </Div>
    </Div>
  );
};

export default Attendance;
