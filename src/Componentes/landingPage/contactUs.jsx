import React from "react";


const contactUs = () => {
  return (
    <>
      <a name="contactUs" href="/#" style={{height: "1px",width: "1px", position: 'absolute', overflow: 'hidden'}}>.</a>
      <section class="py-3 section-1 align-content-center justify-content-center">
        <div class="container py-3 ">
          <div class="row mt-5">
            <div class="col-sm mt-4">
              <h2 class="h2">Contact Form</h2>
              <form
                action="https://formspree.io/f/xbjwedyq"
                type="submit"
                method="post"
              >
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    name="Nombre"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your full name here"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Email
                  </label>
                  <input
                    name="Correo"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="test@example.com"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="Mensaje"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-dark mb-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div class="col-sm-4 mt-3 d-flex justify-content-center text-center">
              <div class="row d-flex justify-content-center">                
                <div class="col m-2">
                  <div class="container height-100 d-flex justify-content-center align-items-center">
                    <div class="card text-center rounded-pill">
                      <div class="py-4 p-2">
                        <div id="profileImg">
                          <img class="rounded-circle" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEVnW2B4QasCCiHD7PpFsebzeARoT_Isozg&usqp=CAU'} alt="cosa" />{" "}
                        </div>
                        <div class="mt-3 pt-3 pb-3 d-flex flex-row justify-content-center">
                          <i className="fa-xl"> Don't click bellow </i>
                          <span class="ms-2 d-flex flex-row justify-content-center "></span>
                        </div>
                        <div class="mt-3">
                          <a
                            class="btn btn-dark rounded-pill"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          >
                            Don't click <i class="fab fa-youtube"></i>
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
