import React from 'react';
import {StyledAxis, StyledDeadzone, StyledCrosshair, StyledDot} from './style';

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
  style.deadzoneDiameter = style.diameter * props.deadzoneScale;
  const posX = (style.diameter/2) + props.x * (style.diameter/2);
  const posY = (style.diameter/2) + props.y * (style.diameter/2);

  return (
    <StyledAxis {...style}>
      <StyledDot
        {...style}
        style={{
          top: `${posY}px`,
          left: `${posX}px`
        }}
      />
      {props.deadzoneScale !== 0
        ? <StyledDeadzone {...style} />
        : null
      }
      <StyledCrosshair {...style}>
        <div className='vertical line' />
        <div className='horizontal line' />
      </StyledCrosshair>
    </StyledAxis>
  );
}

Axis2D.defaultProps = {
  x: 0,
  y: 0,
  deadzoneScale: 0,
}