import React, {useState} from "react";
import exp1 from "../images/exp1.jpeg";
import exp2 from "../images/exp2.jpeg";
import exp3 from "../images/exp3.jpg";
const Experience = (props) =>{
  const [popupImageSrc, setPopupImageSrc] = useState('');
  
  const handleClick = (event) => {
    const clickedImg = event.target;
    const popupImage = document.querySelector('.popup-image');
    const popupImg = document.querySelector('.popup-image img');
    if (popupImage && popupImg) {
      setPopupImageSrc(clickedImg.getAttribute('src'));
      popupImg.setAttribute('src', clickedImg.getAttribute('src'));
      popupImage.style.display = 'block';
    }
  };

  const handleSpanClick = () => {
    const popupImage = document.querySelector('.popup-image');
    if (popupImage) {
      popupImage.style.display = 'none';
    }
  };
return (
   <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <h3 className="exphead">
                <strong>{props.exphead}</strong> <hr />
              </h3>
              <p className="content" style={{ margin: 0 }}>
                {props.content}
              </p>
              <div className="certcont">
              <img className="singleimg" src={exp1} class="img-thumbnail" alt="experience cert" onClick={handleClick} />
              <img className="singleimg" src={exp2} class="img-thumbnail" alt="experience cert"onClick={handleClick}/>
              <img className="singleimg" src={exp3} class="img-thumbnail" alt="experience cert"onClick={handleClick}/>

              </div>
              <div className="popup-image" style={{display:'none'}} >
                <span className="close" onClick={handleSpanClick}>&times;</span>
                <img src={popupImageSrc} alt="experience cert" />
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Experience;
