import React from "react";
import Div from "../components/Div";
import List from "../components/List";
import Text from "../components/Text";
import AttendanceCard from "../components/AttendanceCard";

const mockData = [
  {
    url: "abc",
    name: "Atendimento Odontológico Estudantil",
    location: "Setor 4, UFRN"
  },
  {
    url: "abcd",
    name: "Atendimento Odontológico Estudantil",
    location: "Setor 4, UFRN"
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
      <Text fontSize="30px" fontWeight="bold" toCenter>
        Lista de Atendimentos
      </Text>
      <Div style={{ width: "1000px", alignSelf: "center" }}>
        <List data={mockData} render={renderItem} />
      </Div>
    </Div>
  );
};

export default AttendanceList;
