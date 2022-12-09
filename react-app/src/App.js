import { useEffect, useRef } from "react";
import "./App.css";
import 'reflect-metadata';
import { playerConfig } from "./libs/sunbird-pdf-player/playerConfig";
import "./libs/sunbird-pdf-player/styles.css";
import "./libs/sunbird-pdf-player/pdf-player";
function App() {
  const sunbirdPdfPlayerRef = useRef(null);
  useEffect(() => {
    const playerElement = sunbirdPdfPlayerRef.current;
    const handlePlayerEvent = (event) => {
      console.log("Player Event", event.detail);
    };
    const handleTelemetryEvent = (event) => {
      console.log("Telemetry Event", event.detail);
    };

    playerElement.addEventListener("playerEvent", handlePlayerEvent);
    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    
    return () => {
      playerElement.removeEventListener("playerEvent", handlePlayerEvent);
      playerElement.removeEventListener("telemetryEvent", handleTelemetryEvent);
    };

  }, []);
  return (
    <div className="player-grid">
      <sunbird-pdf-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdPdfPlayerRef}
      ></sunbird-pdf-player>
    </div>
  );
}

export default App;
