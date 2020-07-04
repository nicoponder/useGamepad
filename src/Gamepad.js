import React from 'react';
import {map, reduce} from 'lodash';
import {Axis2D, AxisPress} from './Axes';
import GamepadAxis from './GamepadAxis';
import GamepadButton from './GamepadButton';

const spacemouseProfile = {
  reportedAxes: [
    {group: 'Push', type: '2D', direction: 'x', scalar: 1},
    {group: 'Push', type: '2D', direction: 'y', scalar: 1},
    {group: 'Squash', type: 'Press', scalar: 1},
    {group: 'Tilt', type: '2D', direction: 'y', scalar: 1},
    {group: 'Tilt', type: '2D', direction: 'x', scalar: -1},
    {group: 'Twist', type: 'Twist', scalar: 1},
  ],

}

const getPrettyAxes = (axes, profile) => {
  return reduce(axes, (result, axis, index) => {
    const mappedAxis = profile.reportedAxes[index];
    if (!mappedAxis) return;
    if (!result[mappedAxis.group]) {
      result[mappedAxis.group] = mappedAxis;
    }
    if (mappedAxis.type === '2D') {
      if (!result[mappedAxis.group].value) {
        result[mappedAxis.group].value = {};
      }
      result[mappedAxis.group].value[mappedAxis.direction] = axis * mappedAxis.scalar;
    } else {
      result[mappedAxis.group].value = axis * mappedAxis.scalar;
    }
    return result;
  }, {});
}

export default function Gamepad({gamepad}) {
  if (!gamepad) return null;

  const {axes, buttons, id} = gamepad;

  const prettyAxes = getPrettyAxes(axes, spacemouseProfile);

  return (
    <div>
      <h1>gamepad: {id}</h1>
      <div className='buttons'>
        {map(buttons, ({value}, index) => (<GamepadButton key={`button-${index}`} value={value} index={index} />))}
        {map(prettyAxes, ({value, type}, group) => {
          if (type === '2D') {
            return <Axis2D key={`axis-${group}`} {...value} />
          }
          else if (type === 'Press') {
            return <AxisPress key={`axis-${group}`} value={value} />
          }
          return (<GamepadAxis key={`axis-${group}`} value={value} name={group} />);
        })}
      </div>
    </div>
  );
}