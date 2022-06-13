import React, { useEffect, useState } from 'react';
import "../css/Feed.css";
import db from '../firebase';
import { Post } from './Post';
import ReaderBox from "./ReaderBox";

function Feed() {
  const [posts,setposts] = useState([]);

  useEffect(() => {
    db.collection('questions').orderBy('timestamp',"desc").onSnapshot(snapshot => setposts(snapshot.docs.map((doc) => (({
      id:doc.id,
      question: doc.data()
    })) )) )
  }, []);
  return (
    <div className='feed'>
      <ReaderBox />
      {
        posts.map(({id,question}) =>(
          <Post
             key = {id}
             Id={id}
             image = {question.imageUrl}
             question = {question.question}
             timestamp = {question.timestamp}
             quoraUser = {question.user}
             />
        ))
      }
    </div>
  )
}

export default Feed