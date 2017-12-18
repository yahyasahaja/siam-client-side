import React, { Component } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import style from 'css/loading.scss';

export default ({ cube, circular, wrapped = true, center }) => {
  let centerStyle = {}
  if (center) centerStyle = {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <div
      className={!wrapped ? '' : style.container + ' ' + style.anim}
      style={centerStyle}
    >
      <div className={!wrapped ? '' : style.wrapper}>
        {
          cube ?
            <div id="cube-loading" className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
            : circular ?
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loader"></div>
                <div className="loader2"></div>
                <div className="loader3"></div>
              </div>
              :
              <ProgressBar type='circular' multicolor />
        }
      </div>
    </div>
  );
}