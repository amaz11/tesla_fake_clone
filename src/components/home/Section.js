import React from "react";
import "./home.css";
import Fade from 'react-reveal/Fade';
const Section = ({title, dis, bgimg,leftBtn,rightBtn,id}) => {
    const divBg={
      background: `url(${bgimg})`,
      backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
  return (
    <div className="wrap" style={divBg} id={id}>
      <div className="text__area">
      <Fade top>
        <h1>{title}</h1>
        <p>{dis}</p>
        </Fade>
      </div>
      <div className="buttonsvgAll">
      <Fade bottom>
        <div className="button_gruop">
          <button className="btn btn-left">{leftBtn}</button>
          {
            rightBtn && 
          <button className="btn btn-right">{rightBtn}</button>
          }
        </div>
        </Fade>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42z" fill="#fff"/>
        </svg>
      </div>
    </div>
  );
};

export default Section;
