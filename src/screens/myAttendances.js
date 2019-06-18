import React from "react";
import Div from "../components/Div";
import List from "../components/List";
import Text from "../components/Text";
import AttendanceCard from "../components/AttendanceCard";

const mockData = [
  {
    url: "/meus_atendimentos/a",
    name: "Atendimento Odontológico da UFRN",
    hour: "13:00 - 17:00",
    location: "Av. Sen. Salgado Filho, 3000 - Candelária, Setor 4",
    edit: true
  },
  {
    url: "/meus_atendimentos/d",
    name: "Atendimento Odontólogico Fácil",
    hour: "12:00 - 18:00",
    location: "Rua Alameda das Flores, 403",
    edit: true
  }
];

const renderItem = item => (
  <Div key={item.url} style={{ margin: "10px 0", width: "100%" }}>
    <AttendanceCard
      url={item.url}
      name={item.name}
      location={item.location}
      hour={item.hour}
      edit={item.edit}
    />
  </Div>
);

const retrieveKey = item => item.url;

const MyAttendances = () => {
  return (
    <Div style={{ flexDirection: "column" }}>
      <Div style={{ padding: "20px", justifyContent: "center" }}>
        <Text fontSize="30px" fontWeight="bold" toCenter>
          Meus Atendimentos
        </Text>
      </Div>
      <Div style={{ width: "1000px", alignSelf: "center" }}>
        <List data={mockData} render={renderItem} retrieveKey={retrieveKey} />
      </Div>
    </Div>
  );
};

export default MyAttendances;
