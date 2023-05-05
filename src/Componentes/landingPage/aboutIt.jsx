import React, { Component } from "react";

class aboutIt extends Component {
  render() {
    return (
      <>
        <a name="aboutIt" href="/#" style={{height: "1px",width: "1px", position: 'absolute', overflow: 'hidden'}}>.</a>
        <div className="container">
          <div className="row">
            <div className="card text-center  border-info  text-bg-dark ">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <p className="card-text lead mb-4 fw-semibold">
                Do you need a tool to classify your books
                favorites and not lose them? Book Store is for you. <br />
                We have a section where you can search for your favorite books, see their synopsis and later catalog it as a favorite.<br />
                You can see your favorites from your profile.<br />
                We also have a chat module, so you can give us feedback :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default aboutIt;
