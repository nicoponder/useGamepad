import React from "react";
import {map} from 'lodash';

import "./styles.css";
import Gamepad from './Gamepad';
import useGamepad from "./useGamepad";

export default function App() {
  const {gamepads} = useGamepad({
    onConnect: () => console.log("connected"),
    onDisconnect: () => console.log("disconnected"),
    mappings: {
      "SpaceMouse Compact": {
        axes: [
          {id: 'push x', group: 'Push', type: '2D', direction: 'x', scalar: 1, handler: (value) => console.log(`push x ${value}`)},
          {id: 'push y', group: 'Push', type: '2D', direction: 'y', scalar: 1, handler: (value) => console.log(`push y ${value}`)},
          {id: 'squash', group: 'Squash', type: 'Press', scalar: 1, handler: (value) => console.log(`squash ${value}`)},
          {id: 'tilt y', group: 'Tilt', type: '2D', direction: 'y', scalar: 1, handler: (value) => console.log(`tilt y ${value}`)},
          {id: 'tilt x', group: 'Tilt', type: '2D', direction: 'x', scalar: -1, handler: (value) => console.log(`tilt x ${value}`)},
          {id: 'twist', group: 'Twist', type: 'Twist', scalar: 1, handler: (value) => console.log(`twist ${value}`)},
        ],
        buttons: [{handler: () => {}}, {handler: () => {}}],
      }     
    }
  });

  return (
    <div className="App">
      {gamepads && gamepads.length
      ? map(gamepads, (gamepad, index) => {
        return (<Gamepad key={`gamepad-${index}`} gamepad={gamepad}/>)
      })
      : <span>No gamepads present</span>
      }
    </div>
  );
}
