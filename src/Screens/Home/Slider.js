// import React from "react";
// import "./Home.css";
// import Slideshow from "react-slidez";
// // import swal from 'sweetalert2';

// class SliderHome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         "https://i.imgur.com/ZXBtVw7.jpg",
//         "https://i.imgur.com/DCdBXcq.jpg",
//         "https://i.imgur.com/DvmN8Hx.jpg"
//     ],
//       show: false
//     };
//   }

//   render() {
//     const { images } = this.state;
//     return (
//       // <div id="slidshow-parent">
//       <div>
//         <Slideshow
//           slides={images}
//           showArrows={false}
//           slideInterval={4500}
//           enableKeyboard={false}
//           autoplay
//           effect={"fade"}
//           height={"500px"}
//           width={"100%"}
//         />
//       </div>
//     );
//   }
// }

// export default SliderHome;


import React from "react";
import "./Home.css";
import Slideshow from "react-slidez";
import mix from '../../assets/images/mix.jpg'
import BBQ from '../../assets/images/BBQ.jpeg'
import fries from '../../assets/images/fries.jpg'

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
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
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={mix}
              alt="First slide"
              style={{height: "450px"}}
            />
          </MDBView>
          {/* <SquareButton value="Get started" btnType="light" classes="btnFree" /> */}
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={BBQ}
              alt="Second slide"
              style={{height: "450px"}}
            />
          </MDBView>
          {/* <SquareButton value="Get started" btnType="light" classes="btnFree" /> */}
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={fries}
                alt="Third slide"
                style={{height: "450px"}}
              />
            </MDBView>
          </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    );
  }
}

export default SliderHome;
