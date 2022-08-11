import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './../Clubbanner.css';
const delay = 500;
const slideImages = [
  {
    url: 'images/literary.jpg',
    caption: 'Literary Club'
  },
  {
    url: 'images/cur.png',
    caption: 'Literary Club'
  },
  {
    url: 'images/lit2.png',
    caption: 'Literary Club'
  },
];

function Litbanner() {
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

    /* <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >*/

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
export default Litbanner;