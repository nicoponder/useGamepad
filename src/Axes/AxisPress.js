import React from 'react';
import {StyledAxis, StyledPressGauge} from './style';

const defaultStyle = {
  diameter: 200,
  backgroundColor: '#ddd',
  deadzoneColor: '#aaa',
  crosshairColor: 'black',
  crosshairWidth: .25,
  dotColor: 'red',
  dotDiameter: 10,
}

export default function Axis2D(props) {
  const style = {...defaultStyle, ...props};

  const dotDiameter = (style.diameter/2) + props.value * (style.diameter/2);

  return (
    <StyledAxis {...style}>
      {dotDiameter !== 0
        ? <StyledPressGauge {...style} style={{
          height: `${dotDiameter}px`,
          width: `${dotDiameter}px`,
          marginLeft: `${dotDiameter * -0.5}px`,
          marginTop: `${dotDiameter * -0.5}px`,
        }} />
        : null
      }
    </StyledAxis>
  );
}