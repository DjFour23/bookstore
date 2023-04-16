import React, { Component } from 'react';

class aboutUs extends Component {

    render() {
        return (
            <>
                <div class="container">
        <div class="row">

          <div class="col-x1-4 col-lg-7 col-md-7 col-sm-7 col-xs-6 ">
            <p>
            <h1>Conozca a nuestro equipo</h1>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="row justify-content-center align-items-center">
            <div class="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <img class="card-img-top" src="https://pps.whatsapp.net/v/t61.24694-24/319699629_159496626824035_2363066542091447583_n.jpg?ccb=11-4&oh=01_AdRXlZvFcdvceU0ATl8zBm_gJnNdsLQkfDMbwWGAdfbJ0Q&oe=644810FE" alt="Card image cap" draggable="false"/>
              <div class="card-body">
                <h5 class="card-title">Diego Benavides</h5>
                <p class="card-text">Full Stack Developer</p>
              </div>
            </div>

            <div class="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <img class="card-img-top" src="https://www.recetasnestle.com.co/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-01/aguacate_0.webp?itok=NYnU0ikJ" alt="Card image cap" draggable="false"/>
              <div class="card-body">
                <h5 class="card-title">Victor Herrera</h5>
                <p class="card-text">BackEnd Developer</p>
              </div>
            </div>

            <div class="col-x1-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/800px-Avocado_Hass_-_single_and_halved.jpg" alt="Card image cap" draggable="false"/>
              <div class="card-body">
                <h5 class="card-title">Luis Hernandez</h5>
                <p class="card-text">FrontEnd Developer</p>
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