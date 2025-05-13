import Svg, { Path } from 'react-native-svg';
import React from 'react';

type StarProps = {
  fillColor?: string;
  color?:string
};

export function Star(props:StarProps) {
  return (
     <Svg
      width={"16"}
      height={"22"}
      viewBox="0 0 16 15"
      fill={props.fillColor ? props.fillColor :props.color ? props.color : '#8F8FB2'}
     >
      <Path
        d="M7.99992 1.33331L10.0599 5.50665L14.6666 6.17998L11.3333 9.42665L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66659 9.42665L1.33325 6.17998L5.93992 5.50665L7.99992 1.33331Z"
        stroke={props.color ? props.color : '#8F8FB2'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>

  );
}
