import React, { Component } from "react";
import img from '../../img/Luis.jpg';

class aboutUs extends Component {
  render() {
    return (
      <>
        <a
          name="aboutUs"
          href="/#"
          style={{
            height: "1px",
            width: "1px",
            position: "absolute",
            overflow: "hidden",
          }}
        >
          .
        </a>
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
          <div className="row justify-content-center align-items-center">
            <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 me-3 w-25 border"
             style={{ backgroundColor: "#F5DDC6" }}>
              <img
                className="card-img-top rounded-circle border"
                src="https://scontent.fbaq6-1.fna.fbcdn.net/v/t39.30808-6/272449031_7294795607227191_3675697710997219038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEdv36KJam4C06Xe0SqZ3MgfqgeUbOdvXd-qB5Rs529dw_zNMST149eMTYecaZgdsvAPXdjjtrslA1-w2RfQjxf&_nc_ohc=a3WNWeytRRMAX9RHdj5&_nc_ht=scontent.fbaq6-1.fna&oh=00_AfCOlIQ21PrZ8A8uT4A7aLb_WFqRMjCQTWBtm2FN-q7b8g&oe=645AD820"
                alt="fotito"
                draggable="false"
              />
              <div className="card-body mb-3">
                <h5 className="card-title">Diego Benavides</h5>
                <br />
                <i className="fa-xl"> Full Stack Developer</i>
              </div>
            </div>

            <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6  me-3 w-25 border"
            style={{ backgroundColor: "#F5DDC6" }}>
              <img
                className="card-img-top rounded-circle border"
                src="https://scontent.fbaq6-1.fna.fbcdn.net/v/t39.30808-6/291931157_5461118430577452_5164519313101028415_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHtdYRnCTDaNf9vrssq7MUfmq77yef0nlSarvvJ5_SeVHrvoMNU2HlhgiwwaiJKwHukY8GVXC14yy-YVVREFFQM&_nc_ohc=7pmB3e5mjPMAX-izyRc&_nc_ht=scontent.fbaq6-1.fna&oh=00_AfCkUxBnqCKawXNTsKTz6iReSiEdXupqai2CiY4MMDTULQ&oe=645A6856"
                alt="fotito"
                draggable="false"
              />
              <div className="card-body mb-3">
                <h5 className="card-title">Victor Herrera</h5>
                <br />
                <i className="fa-xl"> BackEnd Developer </i>
              </div>
            </div>

            <div className="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6  me-3 w-25 border"
            style={{ backgroundColor: "#F5DDC6" }}>
              <img
                className="card-img-top rounded-circle border"
                src={img}
                alt="fotito"
                draggable="false"
              />
              <div className="card-body mb-3">
                <h5 className="card-title">Luis Hernandez</h5>
                <br />
                <i className="fa-xl"> FrontEnd Developer </i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default aboutUs;
