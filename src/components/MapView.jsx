import { useState, useEffect, useRef } from "react";
import ArcGISMap from "@arcgis/core/Map";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

import MapView from "@arcgis/core/views/MapView";

// import { Map, WebMap } from "@esri/react-arcgis";
// import Map from "@arcgis/core/Map";

let view;
const MapComponent = () => {
  const [basemap, setBasemap] = useState("streets-night-vector");
  const mapRef = useRef();

  useEffect(() => {
    const map = new ArcGISMap({
      basemap,
    });
    view = new MapView({
      container: mapRef.current,
      map: map,
      center: [-72.699997, 41.599998],
      zoom: 7,
      // ui: {
      //   components: ["zoom", "compass"],
      // },
      constraints: {
        snapToZoom: false,
      },
    });
    const basemapGallery = new BasemapGallery({
      view: view,
    });
    view.ui.add(basemapGallery, "top-right");
  }, [basemap]);

  // unmount
  useEffect(() => {
    return () => {
      view && view.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: 500, margin: 5 }} ref={mapRef} />
      {console.log("aaaa")};
    </>
  );
};

export default MapComponent;
