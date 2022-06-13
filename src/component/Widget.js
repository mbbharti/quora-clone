import React from 'react';
import WidgetOptions from './WidgetOptions';
import "../css/Widget.css";

export const Widget = () => {
  return (
    <div className='widget'>
        <div className='widget_header'>
            <h5>
                Spaces to Follow
            </h5>
        </div>
        <WidgetOptions />
    </div>
  )
}

export default Widget;