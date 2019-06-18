import React from "react";

import Map from "../components/Map";

const markers = [
  {
    position: { lat: -5.836777, lng: -35.203402 },
    info: {
      name: "Atendimento Odontológico da UFRN",
      hour: "13:00 - 17:00",
      address: "Av. Sen. Salgado Filho, 3000 - Candelária, Setor 4"
    }
  },
  {
    position: { lat: -5.829374, lng: -35.219814 },
    info: {
      name: "Atendimento Geriátrico Solidário",
      hour: "8:00 - 12:00",
      address: "Rua João Limeira Silva, 110"
    }
  },
  {
    position: { lat: -5.84809, lng: -35.216143 },
    info: {
      name: "Atendimento Psicológico a baixo custo",
      hour: "8:00 - 17:00",
      address: "Av. Sen. Afonso Guerra, 504"
    }
  },
  {
    position: { lat: -5.85166, lng: -35.208749 },
    info: {
      name: "Atendimento Odontólogico Fácil",
      hour: "12:00 - 18:00",
      address: "Rua Alameda das Flores, 403"
    }
  }
];

const Home = () => {
  return <Map center={{ lat: -5.85166, lng: -35.208749 }} markers={markers} />;
};

export default Home;
