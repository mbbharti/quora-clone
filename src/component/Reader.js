import React from 'react';
import "../css/reader.css";
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import  Widget  from './Widget';

function reader() {
  return (
    <div className='reader'>
    <Navbar />    
    <div className='reader_content'>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
    </div>
  )
}

export default reader;