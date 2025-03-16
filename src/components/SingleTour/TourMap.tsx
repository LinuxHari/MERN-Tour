import {useEffect, useRef} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import {SingleTourResponse} from "../../type";

type TourMapProps = {
  location: SingleTourResponse["itinerary"];
};

const TourMap = ({location}: TourMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current || location.length === 0) return;

    mapRef.current = L.map(mapContainerRef.current, {
      zoomControl: false,
    }).setView([location[0].lat, location[0].lon], 13);

    L.control.zoom({position: "topright"}).addTo(mapRef.current);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(mapRef.current);

    if (location.length > 1) {
      const bounds = L.latLngBounds(location.map(({lat, lon}) => [lat, lon]));

      mapRef.current.fitBounds(bounds);
    }

    location.forEach(({activity, lat, lon}) => {
      const customIcon = L.divIcon({
        className: "custom-icon",
        html: `<div style="position:relative">
        <img src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Flocation-pin.png?alt=media&token=e056406c-d1aa-4f1a-87b1-5e7a27e2c991" style="height: 32px; width: 28px" />
        <div style="padding: 5px; background: white; border-radius: 3px; position: absolute; bottom: 32px; box-shadow: 1px 1px 1px rgba(0,0,0,0.2); display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;overflow: hidden;max-width: 150px;text-overflow: ellipsis;word-break: break-word;">${activity}</div>
        </div>`,
        iconSize: [100, 40],
        iconAnchor: [50, 40],
      });

      L.marker([lat, lon], {icon: customIcon}).addTo(mapRef.current!);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [location]);

  return (
    <TourSectionLayout title="Tour Map">
      <div className="mt-30">
        <div className="map__content rounded-12 js-map-tour" ref={mapContainerRef} style={{height: "400px"}} />
      </div>
    </TourSectionLayout>
  );
};

export default TourMap;
