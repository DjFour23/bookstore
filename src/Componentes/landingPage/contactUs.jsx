import React from "react";


const contactUs = () => {
  return (
    <>
      <a name="contactUs" href="/#" style={{height: "1px",width: "1px", position: 'absolute', overflow: 'hidden'}}>.</a>
      <section className="py-3 section-1 align-content-center justify-content-center">
        <div className="container py-3 ">
          <div className="row mt-5">
            <div className="col-sm mt-4">
              <h2 className="h2">Contact Form</h2>
              <form
                action="https://formspree.io/f/xbjwedyq"
                type="submit"
                method="post"
              >
                <div className="form-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    name="Nombre"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your full name here"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Email
                  </label>
                  <input
                    name="Correo"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="test@example.com"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="Mensaje"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-dark mb-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div class="col-sm-4 mt-3 d-flex justify-content-center text-center">
              <div class="row d-flex justify-content-center">                
                <div class="col m-2">
                  <div class="container height-100 d-flex justify-content-center align-items-center">
                    <div class="card text-bg-warning text-center border-danger border-2 rounded-pill">
                      <div class="py-4 p-2">
                        <div class="  " id="profileImg">
                          <img class="p-1 rounded-circle" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEVnW2B4QasCCiHD7PpFsebzeARoT_Isozg&usqp=CAU'} alt="cosa" />{" "}
                        </div>
                        <div className="mt-3 d-flex flex-row justify-content-center">
                          <i className="fa-xl"> Don't click bellow </i>
                          <span className="facebook ms-2 d-flex flex-row justify-content-center "></span>
                        </div>
                        <div className="mt-3">
                          <a
                            class="btn btn-dark rounded-pill   "
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          >
                            Don't click <i class="fab fa-youtube text-danger"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contactUs;
