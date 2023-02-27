import {useState, useRef} from 'react'
import {Loader} from "./Loader";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const LINK = "https://cloud.pix4d.com/site/175373/dataset/1253240/map?shareToken=94e7a27e-e28e-4344-956c-2086e0611667"
  const LINK2 = "https://github.com/delucis/astro-netlify-cms";
  const overlay = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const timer = import.meta.env.VITE_APP_MS ?? 3000;
  console.log(timer)

  const hideElement = (selector: string) => {
    const panel = document.querySelector(selector);
    if (!panel) return;

    panel.remove();
  }

  const closeOverlay = () => {
    if (!overlay.current) return;

    overlay.current.classList.add("overlay-hide");
    setVisible(false);
    const selectorButton = "body > p4d-app > p4d-cloud-shell > p4d-app-bar-container > p4d-app-bar > mat-toolbar > div > p4d-app-bar-logo-area > div > button";
    // const buttonHome = frames[0].contentDocument.body.querySelector(selectorButton);
    //
    // if (buttonHome) {
    //   buttonHome.remove();
    // }

    setTimeout(() => {
      if (!overlay.current) return;

      overlay.current.remove();
    }, 1000)
  }

  setTimeout(closeOverlay, timer);

  return (
      <>
        <div className="overlay" ref={overlay}>
          <div className="wrapper">
            <div className="img-warp">
              <img src="./logo.svg" alt="logo"/>
            </div>

            {visible && <Loader /> }
          </div>
        </div>

        <div className="App">
          <iframe
              name="iframe1"
              id="iframe1"
              className="app"
              src={LINK}
          ></iframe>
        </div>
      </>

  )
}

export default App
