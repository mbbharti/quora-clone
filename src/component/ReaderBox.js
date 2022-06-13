import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import "../css/ReaderBox.css";
import { selectUser } from '../features/UserSlice';

function ReaderBox() {
  const user = useSelector(selectUser);
  return (
    <div className='readerBox'>
        <div className='readerBox_info'>
            <Avatar
            src = {user.photo} />
            <h5>{user.displayName}</h5>
        </div>
        <div className='readerBox_reader'>
            <p>What do you want to ask or share?</p>
        </div>
    </div>
  )
}

export default ReaderBox