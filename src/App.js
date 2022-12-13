import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            CJMG
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  What you'll learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Our Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome */}
      <section className="bg-dark text-light py-5 text-md-start text-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="display-6">
                Become a <span className="text-warning">Web Developer</span>
              </p>
              <p className="lead my-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                nobis.
              </p>
              <button className="btn btn-primary btn-lg" data-bs-toggle="modal"
              data-bs-target="#enroll">Enroll Now</button>
            </div>
            <img
              className="img-fluid w-50 d-none d-md-block"
              src="/images/showcase.svg"
              alt="showcase"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-3 6 bg-primary text-light">
        <div className="container">
          <div className="d-block d-md-flex align-items-center justify-content-between">
            <h2 className="lead d-block d-md-none">
              Sign Up For Our Newsletter
            </h2>
            <h5 className="d-md-block d-none">Sign Up For Our Newsletter</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-secondary text-light">Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-2 text-center">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <i className="h1 bi bi-laptop"></i>
                  <h5 className="card-title fw-bold">Virtual</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary btn-lg">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body">
                  <i className="h1 bi bi-person-square"></i>
                  <h5 className="card-title fw-bold">Hybrid</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-dark btn-lg">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <i className="h1 bi bi-people"></i>
                  <h5 className="card-title fw-bold">In Person</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary btn-lg">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                className="img-fluid"
                src="/images/fundamentals.svg"
                alt=""
              />
            </div>
            <div className="col-md py-5 p-md-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore fugit dolore qui tenetur commodi cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus aspernatur iusto repellat reprehenderit molestiae earum
                nulla provident nisi quos quidem doloribus ab ad quo, velit
                harum praesentium aliquid commodi vel.
              </p>
              <a href='/' className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark text-light" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md py-5 p-md-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore fugit dolore qui tenetur commodi cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus aspernatur iusto repellat reprehenderit molestiae earum
                nulla provident nisi quos quidem doloribus ab ad quo, velit
                harum praesentium aliquid commodi vel.
              </p>
              <a href='/' className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img className="img-fluid" src="/images/react.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Questiion Accordion */}
      <section className="p-5 p-md-5" id="questions">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Aksed Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-1"
                >
                  Where exactly are you located
                </button>
              </h2>
              <div
                id="question-1"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit rem eligendi sed dolor nihil? Tempora ipsa animi dolores excepturi ut harum, asperiores optio laudantium accusantium incidunt vitae deserunt eligendi cum error praesentium mollitia magnam quidem et eveniet suscipit recusandae ab sequi. Incidunt nesciunt mollitia reiciendis consequatur voluptatum quibusdam blanditiis?
                </div>
              </div>
            </div>
            {/* item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-2"
                >
                  How much does it cost to attend
                </button>
              </h2>
              <div
                id="question-2"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit rem eligendi sed dolor nihil? Tempora ipsa animi dolores excepturi ut harum, asperiores optio laudantium accusantium incidunt vitae deserunt eligendi cum error praesentium mollitia magnam quidem et eveniet suscipit recusandae ab sequi. Incidunt nesciunt mollitia reiciendis consequatur voluptatum quibusdam blanditiis?
                </div>
              </div>
            </div>
            {/* item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-3"
                >
                  What do I need to know?
                </button>
              </h2>
              <div
                id="question-3"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit rem eligendi sed dolor nihil? Tempora ipsa animi dolores excepturi ut harum, asperiores optio laudantium accusantium incidunt vitae deserunt eligendi cum error praesentium mollitia magnam quidem et eveniet suscipit recusandae ab sequi. Incidunt nesciunt mollitia reiciendis consequatur voluptatum quibusdam blanditiis?
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-4"
                >
                  How do I sign-up?
                </button>
              </h2>
              <div
                id="question-4"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit rem eligendi sed dolor nihil? Tempora ipsa animi dolores excepturi ut harum, asperiores optio laudantium accusantium incidunt vitae deserunt eligendi cum error praesentium mollitia magnam quidem et eveniet suscipit recusandae ab sequi. Incidunt nesciunt mollitia reiciendis consequatur voluptatum quibusdam blanditiis?
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-5"
                >
                  Would you help me find a job?
                </button>
              </h2>
              <div
                id="question-5"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit rem eligendi sed dolor nihil? Tempora ipsa animi dolores excepturi ut harum, asperiores optio laudantium accusantium incidunt vitae deserunt eligendi cum error praesentium mollitia magnam quidem et eveniet suscipit recusandae ab sequi. Incidunt nesciunt mollitia reiciendis consequatur voluptatum quibusdam blanditiis?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-light">Our Instructors</h2>
          <p className="lead text-center text-light mb-5">
            Our instructors all have 5+ years working as a web developer in the industry
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, placeat perferendis accusantium molestiae sint illum!</p>
                  <a href="/"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div> 
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, placeat perferendis accusantium molestiae sint illum!</p>
                  <a href="/"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div> 
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, placeat perferendis accusantium molestiae sint illum!</p>
                  <a href="/"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div> 
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, placeat perferendis accusantium molestiae sint illum!</p>
                  <a href="/"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact and Map */}
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location: </span> Krusty Krub
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone: </span> 12345
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone: </span> 87000
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email: </span> Email mo muka mo
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email: </span> CjadePogi@gmail
                </li>
              </ul>
            </div>
            <div className="col-md">

            </div>
          </div>
        </div>
      </section>
      <footer className="p-5 bg-dark text-light text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2022 CJMG landing page</p>
          <a href="/#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>

      {/* Modal */}
      <div className="modal fade" id="enroll" tabIndex="-1" aria-labelledby="enroll" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="enroll">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="lead">Fill out this form and we will get back to you</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="col-form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
