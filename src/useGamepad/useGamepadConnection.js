import { useEffect } from "react";

function _onConnect(e) {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
  );
}

function _onDisconnect(e) {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id
  );
}

export default function useGamepadConnection({
  onConnect = _onConnect,
  onDisconnect = _onDisconnect
}) {
  useEffect(() => {
    window.addEventListener("gamepadconnected", onConnect);
    window.addEventListener("gamepaddisconnected", onDisconnect);

    return () => {
      window.removeEventListener("gamepadconnected", onConnect);
      window.removeEventListener("gamepaddisconnected", onDisconnect);
    };
    // TODO: adding onConnect/onDisconnect as effect deps causes severe perf
    // problems and results in dropped updates. Need to investigate why this is,
    // bc I thought lifting definitions to outside of the hook would allow this.
    // Possibly because:
    // * they're overridden in-props
    // * parent is supplying fresh callbacks
    // * some other cause
  }, []);
}
