import React from "react";
import { Card, Col } from "react-bootstrap";

const AnimeCard = (props) => {

  const { synopsis, title, imgUrl, episodes, score, rated, start_date, members, type, airing, url } = props

  // Function to avoid warning : Cannot read undefined of substr(0,4) when fetching date
  function cutDate(element) {
    if (element !== "undefined" || element !== "null" || element !== "") {
      return element.substr(0, 4)
    } else {
      return element
    }
  }
  return (
    <>
      <Col md="10" xl="5" sm="6" className="p-2 my-2 mx-auto text-white">
        <div className="animeDbCard mb-3 bg-dark" onClick={() => window.open(url, "_blank")}>
          <div className="row no-gutters">
            <div className="col-md-4 col-xl-4 col-sm-12 ">
              <img src={imgUrl} className="card-img" alt="..." className="img-responsive" />
              <div className="row info-text float-left card-text d-none d-md-block d-lg-none ml-1">
                <ul className="info-list p-3">
                  <li><b>Episodes: </b> {episodes}</li>
                  {/* <li><b>Aired date: </b>{cutDate(start_date)}</li> */}
                  <li><b>Type: </b> {type}</li>
                  <li><b>Rated: </b> {rated}</li>
                  <li><b>Score: </b> {score}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xl-8">
              <div className="card-header text-center">
                {/* <div className="score-wrapper float-left">
                  <span>score</span>
                  <h5>#{score}</h5>
                </div> */}
                <h2 className="mt-2">{title}</h2>
              </div>
              <div className="card-body">
                <div className="row d-flex justify-content-center flex-column text-center">
                  <div className="col-12">
                    <p className="card-text">{synopsis}</p>
                    <button className="btn btn-danger px-5 mt-5">More info</button>
                  </div>
                </div>{/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}

              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default AnimeCard;


// <Card style={{ width: "12rem" }}>
// <Card.Img variant="top" src={props.imgUrl} />
// {/* <Card.Title> {props.title} </Card.Title> */}
// <Card.Text>
//   {props.title}
// </Card.Text>
// </Card>