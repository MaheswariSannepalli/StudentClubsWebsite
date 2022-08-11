import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './../Clubbanner.css';
const delay = 500;
const slideImages = [
  {
    url: 'images/roboticsclub.jpg',
    caption: 'Robotics Club'
  },
  {
    url: 'images/rob.png',
    caption: 'Robotics Club'
  },
];

function Robbanner() {
	const [index, setIndex] = 
	React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };

  }, [index]);
    return (
      <div className="slide-container2" >
		 
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide2" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span >{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
		</div>
      
    )
}
export default Robbanner;