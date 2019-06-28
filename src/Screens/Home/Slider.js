import React from "react";
import "./Home.css";
import Slideshow from "react-slidez";
// import swal from 'sweetalert2';

class SliderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://i.imgur.com/ZXBtVw7.jpg",
        "https://i.imgur.com/DCdBXcq.jpg",
        "https://i.imgur.com/DvmN8Hx.jpg"
    ],
      show: false
    };
  }

  render() {
    const { images } = this.state;
    return (
      // <div id="slidshow-parent">
      <div>
        <Slideshow
          slides={images}
          showArrows={false}
          slideInterval={4500}
          enableKeyboard={false}
          autoplay
          effect={"fade"}
          height={"500px"}
          width={"100%"}
        />
      </div>
    );
  }
}

export default SliderHome;
