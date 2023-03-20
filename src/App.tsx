import myPic from "./assets/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import React from "react";

AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  anchorPlacement: "top-center",
});

class Loader extends React.Component {
  // This is an extremely clunky way to do this but it works. Why did I make this in React?
  componentDidMount(): void {
    let theme = localStorage.getItem("darktheme");
    console.log(theme);

    if (theme === "true") {
      document.documentElement.className = "dark";
      let checkbox = document.getElementById("dark") as HTMLInputElement;
      checkbox.checked = true;
    }
  }

  render() {
    return <div></div>;
  }
}

function App() {
  return (
    <div className="contentwrapper">
      <div className="header" id="0">
        <div className="mid">
          <form action="" id="themeselect">
            <label>Dark Theme</label>
            <input
              type="checkbox"
              name="dark"
              id="dark"
              onClick={() => {
                let self: HTMLInputElement | null = document.getElementById(
                  "dark"
                ) as HTMLInputElement;

                if (self?.checked) {
                  document.documentElement.className = "dark";
                  localStorage.setItem("darktheme", "true");
                } else {
                  document.documentElement.className = "";
                  localStorage.setItem("darktheme", "false");
                }
              }}
            />
          </form>{" "}
          Christian Dirks, Web-Dev
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="left mob-2" data-aos="fade-in">
            <h1 className="title" id="1">
              Who I am
            </h1>
            As of 2022 I've begun switching from tech-support, to tech-create.
            <br />
            <br />
            Having previous experience in Programming making plugins for older
            games in lua API's, I have now made a number of sites with React and
            JS
            <br /> <br />
            My main site can be found{" "}
            <a
              href="https://aze-m.com"
              target="_blank"
              rel="noopener noreferrer">
              here!
            </a>
            <br />
            It has a private codebase, as well as implementation of a few
            express.js backends which are closed off to outside requests.
            <br />
            <br />I have since expanded to C and its Supersets as well. All of
            which and the things I do with them (except Unity Engine projects)
            you can find on{" "}
            <a
              href="https://github.com/Aze-M/"
              target="_blank"
              rel="noopener noreferrer">
              my GitHub.
            </a>
          </div>
          <div className="right flex-center mob-1" data-aos="fade-in">
            {/* <img src={myPic} alt="My Face" className="picture" /> */}
            <div id="mypic"></div>
          </div>
          <div className="left flex-center mob-3" data-aos="fade-up">
            <div id="gitpic"></div>{" "}
            {/*This used to be an IMG but this way scalesbetter with mobile.*/}
          </div>
          <div className="right mob-4" data-aos="fade-up">
            <h1 className="title" id="2">
              My Code
            </h1>
            Everything I write has a high emphasis on being readable later, from
            variables to funciton names. <br />
            <br />
            This makes debugging much easier, as well as letting me refactor
            with less issues <br />
            <br />
            Currently I have coded in and with:
            <div className="flex-left">
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Lua</li>
                <li>CSS 3</li>
                <li>HTML 5</li>
              </ul>
              <ul>
                <li>Electron</li>
                <li>Express.js</li>
                <li>MariaDB JS</li>
                <li>Rust</li>
                <li>Rocket (Rust)</li>
                <li>C++ (Half-Life, Console Apps, Drogon)</li>
                <li>C# (ASP.Net, Unity)</li>
              </ul>
            </div>
            You can find all of my public code{" "}
            <a
              href="https://github.com/Aze-M"
              target="_blank"
              rel="noopener noreferrer">
              on GitHub
            </a>
            <br />
            <br />
            This is rather rare right now since I have a few projects I am
            working on in my spare time as well as my actual spare time
            activities like gaming.
          </div>
          <div className="left mob-6" data-aos="fade-up">
            <h1 className="title" id="3">
              How to contact me
            </h1>
            There is various ways to reach me, if you have a job offer or just
            have questions.
            <br />
            <br />
            First:{" "}
            <a href="mailto:christian.dirks.95@gmail.com">
              Sending me an E-Mail
            </a>
            <br />
            These always get read and usually responded to withing a few days.{" "}
            <br />
            <br />
            Second:{" "}
            <a
              href="https://www.linkedin.com/in/christian-dirks-145959209/"
              target="_blank"
              rel="noopener noreferrer">
              Writing me on Linked In
            </a>
            <br />
            Effectively the same as sending me an E-Mail, as I will get one from
            linked in's automation.
            <br />
            <br />
            And last, for more casual contact:{" "}
            <a
              href="https://twitter.com/Aze_EDM"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <br />
            If an answer can wait, probably your best bet.
            <br /> I only post there occasionally but do regurlarly answer to
            messages.
          </div>
          <div className="right flex-center mob-5" data-aos="fade-up">
            <div id="mailpic"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="mid">
          <div className="left">
            <img src={myPic} alt="" />
            <div className="text">
              Made by Aze-M <br /> aka Christian Dirks
            </div>
          </div>
          <div className="center flex-left">
            <ul className="no-list-style">
              <li>
                <a
                  href="https://www.linkedin.com/in/christian-dirks-145959209/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Linked In
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/Aze-M/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Aze_EDM"
                  target="_blank"
                  rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:christian.dirks.95@gmail.com">Mail</a>
              </li>
            </ul>
            <ul className="no-list-style">
              <li>
                <a
                  href="https://pfo.aze-m.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Other Portfolio Site
                </a>
              </li>
              <li>
                <a
                  href="https://aze-m.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Main Site
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aze-M"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#0">Back up</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="text">
              © Christian Dirks, 2023 <br /> Images by Christian Dirks and
              Unsplash
            </div>
          </div>
        </div>
      </div>
      <Loader></Loader>
    </div>
  );
}

export default App;
