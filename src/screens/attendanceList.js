import React from "react";
import Div from "../components/Div";
import List from "../components/List";
import Text from "../components/Text";
import AttendanceCard from "../components/AttendanceCard";

const mockData = [
  {
    url: "/atendimentos/a",
    name: "Atendimento Odontológico da UFRN",
    hour: "13:00 - 17:00",
    location: "Av. Sen. Salgado Filho, 3000 - Candelária, Setor 4"
  },
  {
    url: "/atendimentos/b",
    name: "Atendimento Geriátrico Solidário",
    hour: "8:00 - 12:00",
    location: "Rua João Limeira Silva, 110"
  },
  {
    url: "/atendimentos/c",
    name: "Atendimento Psicológico a baixo custo",
    hour: "8:00 - 17:00",
    location: "Av. Sen. Afonso Guerra, 504"
  },
  {
    url: "/atendimentos/d",
    name: "Atendimento Odontólogico Fácil",
    hour: "12:00 - 18:00",
    location: "Rua Alameda das Flores, 403"
  }
];

const renderItem = item => (
  <Div key={item.url} style={{ margin: "10px 0", width: "100%" }}>
    <AttendanceCard
      url={item.url}
      name={item.name}
      location={item.location}
      hour={item.hour}
    />
  </Div>
);

const retrieveKey = item => item.url;

const AttendanceList = () => {
  return (
    <Div style={{ flexDirection: "column" }}>
      <Div style={{ padding: "20px", justifyContent: "center" }}>
        <Text fontSize="30px" fontWeight="bold" toCenter>
          Lista de Atendimentos
        </Text>
      </Div>
      <Div style={{ width: "1000px", alignSelf: "center" }}>
        <List data={mockData} render={renderItem} retrieveKey={retrieveKey} />
      </Div>
    </Div>
  );
};

export default AttendanceList;
