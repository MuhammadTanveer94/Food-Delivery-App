import React, { Component } from "react";
import "./OrderCard.css";
import kolachi from '../../../assets/images/kolachi.jpeg'


export default class OrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <React.Fragment>
        <div className="container course_Bottom_Container1">
          {/* <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <div className="categoryDropdown">
                <h4 className="CourseList">Course List</h4>
              </div>
            </div>
          </div> */}

          <div className="row item-list">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 card-items">
              <div className="card " >
                <div className="row innerItems">
                  <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 courseListImgDiv">
                  {/* <Image publicId={kolachi} cloudName="oes-project" className=" cardListImage1" />  */}
                    <img src={kolachi} className=" cardListImage1" />
                  </div>

                  <div
                    className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="courseListTitleDiv ">
                      <div className="courseListTitle">
                        <h6>
                        Zinger Burger
                          {/* MATHS- O Levels 9<sup>th</sup> Class Book 1 */}
                        </h6>
                      </div>

                      <div className="courseListStars_Div">
                        <div className="ratings1">
                          <p className="courseListStars">
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span style={{ color: "#9BA0A4" }}>4.5</span>
                          </p>
                          <p className="courseListRating">(13,350 User)</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ clear: "both" }} />


                    <div className="courseListInstructorName">
                      {/* <p>By ${some name}</p> */}
                      <p>By Tanveer Ahmed</p>
                    </div>

                    <div className="courseList_batch_detail">
                      <p>
                        Batch-{" "}
                        <span className="courseListStartingAt">
                          starting at
                        </span>
                        <span className="courseListstartingDate">
                          {" "}
                          June 05, 2019
                        </span>
                        <img
                          className="courseListClassShift"
                          // src={}
                          alt=""
                        />
                      </p>
                    </div>

              

                    <div className="moreBatches">
                      <a href="">More Batches...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card start */}

          {/* Bottom Card End */}
        </div>
      </React.Fragment>
    );
  }
}
