import React, { Component } from "react";

class aboutUs extends Component {
  render() {
    return (
      <>
        <a name="aboutUs" href="/#" style={{height: "1px",width: "1px", position: 'absolute', overflow: 'hidden'}}>.</a>
        <div className="container">
          <div className="row">
            <div className="col-x1-4 col-lg-7 col-md-7 col-sm-7 col-xs-6 ">
              <p>
                <h1>Meet our team</h1>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row justify-content-center align-items-center">
              <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 border">
                <img
                  className="card-img-top"
                  src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/semilla-aguacate.jpg.webp?itok=rB0CsQFA"
                  alt="fotito"
                  draggable="false"
                />
                <div className="card-body">
                  <h5 className="card-title">Diego Benavides</h5>
                  <p className="card-text">Full Stack Developer</p>
                </div>
              </div>

              <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 border">
                <img
                  className="card-img-top"
                  src="https://www.recetasnestle.com.co/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-01/aguacate_0.webp?itok=NYnU0ikJ"
                  alt="fotito"
                  draggable="false"
                />
                <div className="card-body">
                  <h5 className="card-title">Victor Herrera</h5>
                  <p className="card-text">BackEnd Developer</p>
                </div>
              </div>

              <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 border">
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/800px-Avocado_Hass_-_single_and_halved.jpg"
                  alt="fotito"
                  draggable="false"
                />
                <div className="card-body">
                  <h5 className="card-title">Luis Hernandez</h5>
                  <p className="card-text">FrontEnd Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default aboutUs;
