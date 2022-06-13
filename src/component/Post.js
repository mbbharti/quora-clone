import { Avatar } from '@material-ui/core';
import  {ArrowUpwardOutlined , ArrowDownwardOutlined, RepeatOutlined, ChatBubbleOutlineOutlined, ShareOutlined, MoreHorizOutlined }  from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "../css/Post.css"
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {selectQuestionId ,selectQuestionName,setQuestionInfo} from "../features/questionSlice";
import db from "../firebase";
import {selectUser} from '../features/UserSlice';
import firebase from 'firebase/compat/app';


Modal.setAppElement('#root');

export const Post = ({Id,question,image,timestamp,users}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);
  const questionName = useSelector(selectQuestionName);
  const [upvote,setUpvote] = useState({isClicked:'true',upvoteValue:0,downvoteValue:0});

  // let upvoteValue =0;
  // let downvoteValue =0;

  const handleUpvote =()=>{
    if(upvote.isClicked){
      setUpvote(prev => ({
        ...prev,
        isClicked:!prev.isClicked,
        upvoteValue: 1,
      }))
    }
    else{
      setUpvote(prev => ({
        ...prev,
        isClicked:!prev.isClicked,
        upvoteValue: 0,
      }))
    }
  }
  const handleDownvote =()=>{
    if(upvote.isClicked){
      setUpvote(prev => ({
        ...prev,
        isClicked:!prev.isClicked,
        downvoteValue: 1,
      }))
    }
    else{
      setUpvote(prev => ({
        ...prev,
        isClicked:!prev.isClicked,
        downvoteValue: 0,
      }))
    }
  }

  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    // console.log(questionId);
    setAnswer("");
    setIsModalOpen(false);
  };
  return (
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      <div className="post__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />
        <h4>{user.displayName ? user.displayName : user.email}</h4>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {user.displayName ? user.displayName : user.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        <img src={image} alt="Image not Found" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <div className="post_upvoteSection">
            <ArrowUpwardOutlined className="arrowUpwardDownward" onClick={handleUpvote} />
            {upvote.upvoteValue}    
          </div>
          <div className="post_upvoteSection">
          <ArrowDownwardOutlined className="arrowUpwardDownward" onClick={handleDownvote} />
          {upvote.downvoteValue}    
          </div>
        </div>

        {/* <RepeatOutlined /> */}
        <ChatBubbleOutlineOutlined className='commentIcon' onClick={() => setIsModalOpen(true)} />
        <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {user.displayName ? user.displayName : user.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
}
