import React from 'react';
import '../css/SidebarOptions.css';
import history from "../images/history.jpg";
import business from "../images/business.jpg";
import psychology from "../images/psychology.png";
import cooking from "../images/cooking.jpg";
import music from "../images/music.jpg";
import science from "../images/science.jpg";
import health from "../images/health.jpg";
import movies from "../images/movies.jpg";
import technology from "../images/technology.jpg";
import education from "../images/education.jpg";
import { Add } from '@material-ui/icons';

export const SidebarOptions = () => {
  return (
    <div className='sidebaroptions'>
        <div className='sidebarOption'>
            <img
                src = {history}
                alt = "history.png"
            />
            <p>History</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {business}
                alt = "business.png"
            />
            <p>Business</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {psychology}
                alt = "psychology.png"
            />
            <p>Psychology</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {cooking}
                alt = "cooking.png"
            />
            <p>Cooking</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {music}
                alt = "music.png"
            />
            <p>Music</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {science}
                alt = "science.png"
            />
            <p>Science</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {health}
                alt = "health.png"
            />
            <p>Health</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {movies}
                alt = "movies.png"
            />
            <p>Movies</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {technology}
                alt = "technology.png"
            />
            <p>Technology</p>
        </div>
        <div className='sidebarOption'>
            <img
                src = {education}
                alt = "education.png"
            />
            <p>Education</p>
        </div>
        <div className='sidebarOption'>
            <Add />
            <p className='text'>Discover Spaces</p>
        </div>
    </div>
  )
}
