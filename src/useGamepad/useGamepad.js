import { useEffect, useRef, useState } from "react";
import {forEach, get} from 'lodash';

import useGamepadConnection from "./useGamepadConnection";

export default function useGamepad({mappings, onConnect, onDisconnect}) {
  const [gamepads, _setGamepads] = useState([]);
  const frame = useRef(0);

  useGamepadConnection({
    onConnect: ({gamepad}) => onConnect(gamepad),
    onDisconnect: ({gamepad}) => onDisconnect(gamepad),
  })

  function updateStatus() {
    frame.current++;
    const curGamepads = navigator.getGamepads();
    _setGamepads(curGamepads);


    forEach(curGamepads, (gamepad) => {
      const mappingId = gamepad && gamepad.id.split('(')[0].trim();
      if (get(mappings, `[${mappingId}]`)) {
        if (gamepad.axes) {
          gamepad.axes.forEach((axis, index) => {
            const {handler} = get(mappings, `[${mappingId}].axes[${index}]`);
            if (axis) {
              handler(axis)
            }
          });
        }
        if (gamepad.buttons) {
          gamepad.buttons.forEach((button, index) => {
            const {handler} = get(mappings, `[${mappingId}].buttons[${index}]`);
            if (button.value) {
              handler(button.value)
            }
          });
        }
      }
    });

    return window.requestAnimationFrame(updateStatus);
  }

    // console.log('frame #', frame.current, navigator.getGamepads()[0], gamepads);

  useEffect(() => {
    const requestId = requestAnimationFrame(updateStatus);

    return () => {
      window.clearAnimationFrame && window.clearAnimationFrame(requestId);
    }
  }, []);

  return {
    gamepads
  };
}
