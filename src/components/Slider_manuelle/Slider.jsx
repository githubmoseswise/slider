import { useState } from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import s from "./style.module.css";
import sliderData from "../../data/sliderData";
function Slider() {
  const [sliderIndex, setSlideIndex] = useState(1);

  function toggleImage(indexPayload) {
    let newState;
    if (indexPayload + sliderIndex > sliderData.length) {
      newState = 1;
    } else if (indexPayload + sliderIndex < 1) {
      newState = sliderData.length;
    } else {
      newState = indexPayload + sliderIndex;
    }
    setSlideIndex(newState);
  }
  
  return (
    <>
      <p className={s.textInfo}>
        {sliderIndex} / {sliderData.length}
      </p>
      <div className={s.slider}>
        <p className={s.imageInfo}>
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className={s.sliderImage}
        />

        <button
          onClick={() => toggleImage(-1)}
          className={`${s.navigationButton} ${s.prevButton}`}
        >
          <img src={leftChevron} alt="previous image" />
        </button>

        <button
          onClick={() => toggleImage(1)}
          className={`${s.navigationButton} ${s.rightButton}`}
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}

export default Slider;
