import styled from 'styled-components';

export const StyledAxis = styled.div`
  z-index: 0;
  height: ${props => props.diameter}px;
  width: ${props => props.diameter}px;
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  display: inline-block;
  position: relative;
`;

export const StyledDeadzone = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 1;
  height: ${props => props.deadzoneDiameter}px;
  width: ${props => props.deadzoneDiameter}px;
  box-sizing: border-box;
  background-color: ${props => props.deadzoneColor};
  border-style: solid;
  /* border-width: 1px; */
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin-left: ${props => props.deadzoneDiameter * -0.5}px;
  margin-top: ${props => props.deadzoneDiameter * -0.5}px;
`;

export const StyledCrosshair = styled.div`
  position: relative;
  display: inline-block;
  z-index: 3;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  .line {
    position: absolute;
    display: inline-block;
    border-color: ${props => props.crosshairColor};
    border-width: ${props => props.crosshairWidth}px;
    box-sizing: border-box;
  }
  .vertical {
    height: 100%;
    width: .25px;
    left: 50%;
    margin-left: ${props => props.crosshairWidth/-2}px;
    top: 0;
    border-left-style: solid;
  }
  .horizontal {
    left: 0;
    top: 50%;
    height: .25px;
    margin-top: ${props => props.crosshairWidth/-2}px;
    width: 100%;
    border-top-style: solid;
  }
`;

export const StyledDot = styled.span`
  z-index: 2;
  position: absolute;
  height: ${props => props.dotDiameter}px;
  width: ${props => props.dotDiameter}px;
  background-color: ${props => props.dotColor};
  border-radius: 50%;
  display: inline-block;
  margin-left: ${props => props.dotDiameter * -0.5}px;
  margin-top: ${props => props.dotDiameter * -0.5}px;
`;


export const StyledPressGauge = styled.span`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${props => props.dotColor};
  border-radius: 50%;
  display: inline-block;
`;