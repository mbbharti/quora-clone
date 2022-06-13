import React, { useState } from 'react'
import logo from '../images/logo.PNG'
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import  AssignmentIndOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar, Input} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../css/Navbar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';
import db,{ auth } from '../firebase';
import Modal from 'react-modal';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import LinkIcon from '@material-ui/icons/Link';
Modal.setAppElement('#root');

function Navbar() {
    const user = useSelector(selectUser);
    const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className='navbar'>
        <div className='header_logo'>
            <img
                src= {logo}
                alt='logo image'
            />
        </div>
        <div className='header_icons'>
            <div className='icons'>
                <HomeIcon />
            </div>
            <div className='icons'>
                <FeaturedPlayListOutlinedIcon />
            </div>
            <div className='icons'>
                <AssignmentIndOutlinedIcon/>
            </div>
            <div className='icons'>
                <PeopleAltOutlinedIcon/>
            </div>
            <div className='icons'>
                <NotificationsOutlinedIcon/>
            </div>

        </div>
        <div className='inputSearch'>
            <SearchIcon />
            <input type="text" placeholder='Enter Search' />
        </div>
        <div className='avatar_section'>
            <div className='avatar'>
                <Avatar
                onClick = {() => auth.signOut()}
                src = {user.photo} />
            </div>
            <LanguageIcon />
            <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>


            <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal_title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal_info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} </p>
            {/* <div className="modal_scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div> */}
          </div>
          <div className="modal_field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal_fieldLink">
              <LinkIcon />
              <input
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal_buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
           </Modal>
        </div>
    </div>
  )
}

export default Navbar