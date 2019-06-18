import React, { useState } from "react";
import { compose, withProps } from "recompose";
import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Text from "../components/Text";
import Div from "../components/Div";
import Button from "./Button";

const MarkerWithInfo = ({
  position,
  showInfo,
  onClick,
  markerInfo,
  onClose
}) => {
  return (
    <Marker position={position} onClick={onClick}>
      {showInfo && markerInfo && (
        <InfoWindow onCloseClick={onClose}>
          <Div
            style={{
              justifyContent: "space-between"
            }}
          >
            <Div style={{ flexDirection: "column" }}>
              <Text fontWeight="bold" fontSize="20px">
                {markerInfo.name}
              </Text>
              <Text icon={faClock}>{markerInfo.hour}</Text>
              <Text icon={faMapMarker}>{markerInfo.address}</Text>
            </Div>
            <Div style={{ alignItems: "center", marginLeft: "20px" }}>
              <Button
                type="green"
                text="Ver mais"
                href={"/atendimentos/akodsoskdo"}
              />
            </Div>
          </Div>
        </InfoWindow>
      )}
    </Marker>
  );
};

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyClFadeleQEkbVYp_JjXVgfUvUhMlz3OjE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ flex: 1 }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const [selected, setSelected] = useState(-1);
  const { markers, center } = props;

  const markerNodes = markers
    ? markers.map((el, index) => {
        return (
          <MarkerWithInfo
            key={index}
            position={el.position}
            showInfo={selected === index}
            markerInfo={el.info}
            onClick={() => setSelected(index)}
            onClose={() => setSelected(-1)}
          />
        );
      })
    : null;

  return (
    <GoogleMap defaultZoom={14} defaultCenter={center}>
      {markerNodes}
    </GoogleMap>
  );
});

Map.defaultProps = {
  center: { lat: -5.85166, lng: -35.208749 },
  markers: [{ position: { lat: -5.85166, lng: -35.208749 } }]
};

export default Map;
