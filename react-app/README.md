# Getting Started with Create React App

For Existing react app follow the below steps to integrate pdf player as web component

- Copy the assets files from web component folder
  [assets](https://github.com/project-sunbird/sunbird-pdf-player/tree/master/web-component/assets) to public/assets/ folder

- Copy the styles.css and sunbird-pdf-player.js as pdf-player.js files from web component folder
  [assets](https://github.com/project-sunbird/sunbird-pdf-player/tree/master/web-component/) to src/libs/sunbird-pdf-player folder 

- Import  "reflect-metadata" in package.json file and do npm install
    ```bash
  "reflect-metadata": "^0.1.13"
    ```

- Import  "reflect-metadata" in App.js file 
    ```bash
    import 'reflect-metadata';
    ```

- Create  .eslintignore  file in root folder and update below paths

    ```bash
    src/libs/*
    ```

- Import  styles.css and pdf-player.js and playerConfig files in component from src/libs/sunbird-pdf-player folder
    ```bash
    import { playerConfig } from "./libs/sunbird-pdf-player/playerConfig";
    import "./libs/sunbird-pdf-player/styles.css";
    import "./libs/sunbird-pdf-player/pdf-player";
    ```

- Import  "useRef" in component
    ```bash
    import {useRef } from "react";
    ```

- Create player reference in component 
    ```bash
      const sunbirdPdfPlayerRef = useRef(null);
    ```

 - Listen for the output events: **playerEvent** and **telemetryEvent**

	```javascript
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

	```   
- Import  below css in component 
    ```bash
    .player-grid {
     height: 90vh;
     width: 90%;
     margin: 0 auto;
     display: grid;
     gap: 1.5rem;
     padding-top: 4rem;

     @media screen and (max-width:768px) {
           grid-template-columns: 100%;
            gap: 0px;
          }
     }
    ```

 - Import  sunbird-pdf-player in component
    ```bash
    return (
    <div className="player-grid">
      <sunbird-pdf-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdPdfPlayerRef}
      ></sunbird-pdf-player>
    </div>
    );
    ```

- Provide input to render PDF player

Use the mock config in your component to send input to PDF player
Click to see the mock - [playerConfig](https://github.com/project-sunbird/sunbird-pdf-player/blob/master/src/app/data.ts)
**Note:** : Send input config as string   