import { Link } from "react-router-dom";
import classes from "../styles/style.module.css";
// import Swiper from "swiper";

const Home = () => {
  return (
    <>
      {/* <!-- start Header --> */}
      <header>
        {/* <div className="navigation d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <Link to="#" className={classes.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to="work.html">Work</Link>
            </li>
            <li>
              <Link to="#">Articles</Link>
            </li>
            <li>
              <Link to="contact.html">let's talk</Link>
            </li>
          </ul>
        </div> */}
        {/* <nav className="fixed-top d-flex justify-content-between align-items-center  px-5 py-3">
          <div className="logo">
            <Link className="navbar-brand" to="#">
              <img src="images/avada-freelance-logo.webp" alt="" />
            </Link>
          </div>
          <div className="burger-button">
            <span className="lines d-block"></span>
            <span className="lines d-block"></span>
            <span className="lines d-block"></span>
          </div>
        </nav> */}
        <div className={`${classes.hero} text-center`}>
          <h4>Graduation Project</h4>
          <h1>Go Safe</h1>
          <span className="text-muted">
            IF IT DOESNT CHALLENGE YOU, IT DOESNT CHANGE YOU
          </span>
        </div>
      </header>
      {/* <!--end header--> */}
      {/* <!-- start About --> */}
      <div className={`${classes.about} py-100`}>
        <div className="container">
          <div
            className={`${classes.secTitle} text-center position-relative mb-5 pb-3`}
          >
            <h1>About Me</h1>
            <span className="text-muted text-uppercase">UI UX Export</span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end about -->
<!-- start work --> */}
      <div className={`${classes.whyWork} text-center py-100`}>
        <div className="container">
          <div
            className={`${classes.secTitle} text-center position-relative mb-5 pb-3`}
          >
            <h1>Why work with Me </h1>
            <span className="text-muted text-uppercase">
              Web . Branding . UI/UX
            </span>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo
            <br />
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className={`${classes.circle}`} data-perc=".9">
                <i
                  className="fb-icon-element-1 fb-icon-element fontawesome-icon fa fa-gitlab circle-no"
                  style={{
                    fontSize: 75,
                    alignSelf: "center",
                    position: "absolute",
                  }}
                ></i>
              </div>
              <span className="text-uppercase">Web Design</span>
            </div>
            <div className="col-md-4">
              {/* to do */}
              <div className={`${classes.circle}`} data-perc=".8">
                {/* to do */}
                <i
                  className="fb-icon-element-2 fb-icon-element fontawesome-icon fa fa-shield circle-no"
                  style={{
                    fontSize: 75,
                    alignSelf: "center",
                    position: "absolute",
                    top: 78,
                    left: 155,
                  }}
                ></i>
              </div>
              <span className="text-uppercase">Branding</span>
            </div>
            <div className="col-md-4">
              {/* to do */}
              <div className={`${classes.circle}`} data-perc=".95">
                <i
                  className="fb-icon-element-3 fb-icon-element fontawesome-icon fa fa-diamond circle-no"
                  style={{
                    fontSize: 75,
                    alignSelf: "center",
                    position: "absolute",
                    top: 79,
                    left: 145,
                  }}
                ></i>
              </div>
              <span className="text-uppercase">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end whyWork -->
<!-- start recentWork --> */}
      <div className={`${classes.recentWork}`}>
        <div className="container-fluid">
          <div
            className={`${classes.secTitle} text-center position-relative mb-5 pb-3`}
          >
            <h1>Recent Work </h1>
            <span className="text-uppercase">Web . Branding . UI/UX</span>
          </div>
          <div className="row">
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img
                  className="img-fluid"
                  src="images/portfolio1_featured_item.webp"
                  alt=""
                />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img
                  className="img-fluid"
                  src="images/img7.jpg"
                  alt=""
                  width="100%"
                />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img className="img-fluid" src="images/img3.jpeg" alt="" />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img className="img-fluid" src="images/img4.jpeg" alt="" />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img className="img-fluid" src="images/img5.jpeg" alt="" />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className={`${classes.image} position-relative`}>
                <img className="img-fluid" src="images/img6.jpeg" alt="" />
                <div
                  className={`${classes.inner} d-flex justify-content-center align-items-center`}
                >
                  <span>Flat picture Frames</span>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-0">
              <button className="text-uppercase w-100 py-5 boder-0">
                View All work
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End recentWork -->
<!-- start Quote --> */}
      <div className={`${classes.quote} py-100 text-center`}>
        <div className="container">
          <img src="images/quote.webp" alt="" />
          <div
            id="carouselExampleFade"
            className={`${classes.carousel} carousel slide carousel-fade py-5`}
            data-ride="carousel"
          >
            <ol className={`${classes.carouselIndicators} carousel-indicators`}>
              <li
                data-target="#carouselExampleFade"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleFade" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className={`${classes.carouselItem} active`}>
                <p>
                  “Thats been one of my mantras — focus and simplicity. Simple
                  can be harder than complex; you have to work hard to get your
                  thinking clean to make it simple.”
                </p>
              </div>
              <div className={`${classes.carouselItem} carousel-item `}>
                <p>
                  “I think if you do something and it turns out pretty good,
                  then you should go do something else wonderful, not dwell on
                  it for too long. Just figure out whats next.”
                </p>
              </div>
            </div>
            <h6 className="font-weight-bolder text-uppercase py-3">
              Steve Jobs - Apple
            </h6>
          </div>
          <div className={`${classes.brands} mt-5`}>
            <span>TRUSTED BY GLOBAL BRANDS</span>
            {/* <!-- Swiper --> */}
            <div className={`${classes.swiperContainer} swiper-container py-5`}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {" "}
                  <img src="images/logo_demo_1.webp" alt="" />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <img src="images/logo_demo4.webp" alt="" />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <img src="images/Vector_Smart_Object-1.webp" alt="" />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <img src="images/Vector_Smart_Object-2.webp" alt="" />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <img src="images/Vector_Smart_Object-3.webp" alt="" />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <img src="images/Vector_Smart_Object.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Quote -->
<!-- start Expert Design Advice --> */}
      <div className={`${classes.expert}`}>
        <div className="container-fluid">
          <div
            className={`${classes.secTitle} text-center position-relative mb-5 p-5`}
          >
            <h1>Expert Design Advice </h1>
            <span className="text-uppercase">TRENDING DESIGN NEWS</span>
          </div>
          <div className="row">
            <div className="col-md-4 p-0">
              <div className={`${classes.card} card  border-0`}>
                <div className={`${classes.image} image position-relative`}>
                  <img
                    className="img-fluid"
                    // src="../media/images/blog3-featured.jpg"
                    src="images/blog3-featured.jpg"
                    alt=""
                  />
                  <div
                    className={`${classes.inner} d-flex justify-content-center align-items-center`}
                  >
                    <span>Live the design process</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Live the design process</h5>
                  <p className="card-text text-muted">
                    What's to come next? Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              {/* Check Class card test */}
              <div className={`${classes.card} card border-0`}>
                <div className={`${classes.image} image position-relative`}>
                  <img
                    className="img-fluid"
                    src="images/blog1-featured-800x533.webp"
                    alt=""
                  />
                  <div
                    className={`${classes.inner} d-flex justify-content-center align-items-center`}
                  >
                    <span>Whats Next of the App Store?</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Whats Next of the App Store?</h5>
                  <p className="card-text text-muted">
                    What's to come next? Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              {/* Check Class card test */}
              <div className={`${classes.card} card border-0`}>
                <div className={`${classes.image} image position-relative`}>
                  <img
                    className="img-fluid"
                    src="images/blog1-featured-800x533.webp"
                    alt=""
                  />
                  <div
                    className={`${classes.inner} d-flex justify-content-center align-items-center`}
                  >
                    <span>Whats Next of the App Store?</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Whats Next of the App Store?</h5>
                  <p className="card-text text-muted">
                    What's to come next? Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 p-0">
              <div className="card border-0">
                <div className={`${classes.image} image position-relative`}>
                  <img
                    className="img-fluid"
                    src="images/blog2-featured-400x267.jpg"
                    width="100%"
                    alt=""
                  />
                  <div
                    className={`${classes.inner} d-flex justify-content-center align-items-center`}
                  >
                    <span>The Humble Wooden Desk</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">The Humble Wooden Desk</h5>
                  <p className="card-text text-muted">
                    What's to come next? Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- end expert -->
<!-- start contact --> */}
      <div className={`${classes.contact}  py-100 text-center`}>
        <div className="container">
          <div
            className={`${classes.secTitle} text-center position-relative mb-5 p-5`}
          >
            <h1>Lets Work Together </h1>
            <span className="text-uppercase">
              TELL ME MORE ABOUT YOUR PROJECT
            </span>
          </div>
          <p className="py-4 text-center">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <form>
            <div className="form d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                className="form-control w-50 mb-4 border-0 py-4 "
                placeholder=" Name"
              />
              <input
                type="email"
                className="form-control w-50 mb-4 border-0 py-4"
                placeholder="Email"
              />
              <input
                type="Phone"
                className="form-control w-50 mb-4 border-0 py-4"
                placeholder="Phone"
              />
              <button type="submit" className="btn w-50 py-3">
                Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
