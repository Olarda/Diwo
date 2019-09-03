import * as React from 'react';
import './ellipse.css';
import {numberWithDefault} from '../../utils/index';

interface CircleProps {
  height?: number
  width?: number
}

const DEFAULT_ELLIPSE_SIZE = 3.75;

function Ellipse(props: CircleProps) {
  const height = numberWithDefault(props.height, numberWithDefault(props.width, DEFAULT_ELLIPSE_SIZE));
  const width = numberWithDefault(props.width, numberWithDefault(props.height, DEFAULT_ELLIPSE_SIZE));

  return  (
      <div className='ellipseComponent'>
          <div style={{width: `${width}rem`, height: `${height}rem`}} className='ellipse'/>
      </div>
  )
}

export default Ellipse
