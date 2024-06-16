import React from 'react';
import PuneCity_gaslevel from './PuneCity_gaslevel';
import PuneCity_waterlevel from './PuneCity_waterlevel';
import PuneCity_methanelevel from './PuneCity_methanelevel';
import { PixRounded } from '@mui/icons-material';

function PuneCity() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '70%', marginLeft:0,marginBottom:"300px",top:300 }}>
        <h2 style={{position: 'absolute', right: 400, top: 300 }}>Gas Level</h2>
        <PuneCity_gaslevel style={{ marginLeft:0,top:300}}/>
      </div>
      <div style={{ width: '70%',  marginLeft:0,bottom:200}}>
      <h2 style={{position: 'absolute', left: 300, top: 750 }}>Water Level</h2>
        <PuneCity_waterlevel style={{ width: '200%',  marginLeft:0}} />
      </div>
      <div style={{ width: '70%',  marginLeft:0,bottom:-300 }}>
      <h2 style={{position: 'absolute', right: 300, top: 1250 }}>Methane Level</h2>

        {/* <h2>Water Level</h2> */}
        <PuneCity_methanelevel />
      </div>
    </div>
  );
}

export default PuneCity;