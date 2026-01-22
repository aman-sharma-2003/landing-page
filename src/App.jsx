import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <header className="bgRed white">
          <div className="innerHeader">
            <nav className="flex spaceBetween bold white">
              <div className="links flex spaceBetween">
                <div>
                  <img src="./logo.svg" alt="logo" />
                </div>
                <div>
                  Product <img src="./icon-arrow-light.svg" alt="arrow" />
                </div>
                <div>
                  Company <img src="./icon-arrow-light.svg" alt="arrow" />
                </div>
                <div id="connect">
                  Connect <img src="./icon-arrow-light.svg" alt="arrow" />
                  <div className="dropdown flex">
                    <a href="#">Contact</a>
                    <a href="#">Newsletter</a>
                    <a href="#">LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="buttons bold">
                <button id="loginBtn">Login</button>
                <button id="signupBtn" className="red500 bold">
                  Sign Up
                </button>
              </div>
              <button id="hamburger" onClick={handleClick}>
                <img
                  src={open ? "./icon-close.svg" : "./icon-hamburger.svg"}
                  alt="hamburger"
                />
              </button>
              {open && (
                <div className="hamburgerData flex">
                  <div>
                    Product <img src="./icon-arrow-dark.svg" alt="arrow" />
                  </div>
                  <div>
                    Company <img src="./icon-arrow-dark.svg" alt="arrow" />
                  </div>
                  <div id="hamburgerConnect" className="textCenter">
                    Connect <img src="./icon-arrow-dark.svg" alt="arrow" />
                    <div className="hamburgerDataDropdown flex">
                      <a href="#">Contact</a>
                      <a href="#">Newsletter</a>
                      <a href="#">LinkedIn</a>
                    </div>
                  </div>
                  <div id="line"></div>
                  <div className="hamburgerDataButtons flex bold">
                    <button className="textCenter">Login</button>
                    <button id="hamburgerSignup" className="bold">
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </nav>

            <h1 className="textCenter">A modern publishing platform</h1>
            <p className="textCenter">
              Grow your audience and build your online brand
            </p>
            <div className="buttons flex center gap10">
              <button id="startBtn" className="red500 bold">
                Start for Free
              </button>
              <button id="learnBtn" className="bold white center">
                Learn More
              </button>
            </div>
          </div>
          <div className="pattern">
            <img
              src="./bg-pattern-intro-desktop.svg"
              alt="pattern"
              id="pattern"
            />
            <img
              src="./bg-pattern-intro-mobile.svg"
              alt="pattern"
              id="patternMobile"
            />
          </div>
        </header>

        <div className="main1 blue900">
          <h2 className="textCenter">Designed for the future</h2>
          <div className="flex center">
            <img
              src="./illustration-editor-mobile.svg"
              alt="editor"
              id="editorMobile"
            />
          </div>
          <div className="flex">
            <div id="innerMain1">
              <div>
                <h3>Introducing an extensible editor</h3>
                <p>
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div>
                <h3>Robust content management</h3>
                <p>
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </p>
              </div>
            </div>
            <div>
              <img
                src="./illustration-editor-desktop.svg"
                alt="editor"
                id="editor"
              />
            </div>
          </div>
        </div>
        <div className="main2 bgBlue white">
          <div className="flex ">
            <div className="clip">
              <img src="./bg-pattern-circles.svg" alt="circles" id="circles" />
            </div>
            <img src="./illustration-phones.svg" alt="phones" id="phones" />

            <div id="innerMain2" className="">
              <h2>State of the Art Infrastructure</h2>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
        <div className="main3">
          <div className="flex">
            <div>
              <img
                src="./illustration-laptop-desktop.svg"
                alt="laptop"
                id="laptop"
              />
              <img
                src="./illustration-laptop-mobile.svg"
                alt="laptop"
                id="laptopMobile"
              />
            </div>
            <div className="innerMain3 blue900">
              <div>
                <h3>Free, open, simple</h3>
                <p>
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
              <div>
                <h3>Powerful tooling</h3>
                <p>
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex  white spaceBetween bold">
          <div>
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="flex">
            <p>Product</p>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
          <div className="flex">
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex">
            <p> Connect</p>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
