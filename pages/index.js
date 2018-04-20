import Head from "next/head";

export default class extends React.Component {
  render() {
    return (
      <div className="body">
        <Head>
          <title>Hill Street Labs</title>
          <meta
            name="description"
            content="A development studio in San Francisco, CA."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />

          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
            rel="stylesheet"
          />
        </Head>

        <div className="bg" />
        <div className="wrapper">
          <div>
            <img src="/static/street.png" />
          </div>
          <div>
            <h3>Hill Street Labs.</h3>
            <p>A development studio in San Francisco, CA.</p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/hillstreetlabs/espresso"
                >
                  Espresso
                </a>
              </li>
              <li>
                <a target="_blank" href="https://ethmoji.io">
                  Ethmoji
                </a>
              </li>
              <li>
                <a target="_blank" href="https://parr.io">
                  Parr
                </a>
              </li>
            </ul>
            <p>
              Want to work with us? Drop us a note at{" "}
              <a href="mailto:bot@hillstreetlabs">bot@hillstreetlabs.com</a> or
              visit us on{" "}
              <a
                href="https://www.google.com/maps/place/Valencia+St+%26+Hill+St,+San+Francisco,+CA+94110/@37.7561146,-122.4232528,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e3ef4d38e6f:0x8da368fc541ed120!8m2!3d37.7561104!4d-122.4210641?hl=en"
                target="_blank"
              >
                Hill St
              </a>.
            </p>
          </div>
        </div>
        <style jsx>{`
          .bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

            z-index: -1;
          }
          .wrapper {
            padding: 40px;
            text-align: left;
            width: 100%;
            max-width: 600px;
            font-family: "IBM Plex Mono", monospace;
            color: blue;
            line-height: 1.4;
            box-sizing: border-box;
          }
          @media (max-width: 600px) {
            .wrapper {
              padding: 20px;
            }
          }
          .wrapper h3 {
            font-size: 30px;
            line-height: 1.4;
          }
          .wrapper a {
            color: blue;
          }
          .wrapper img {
            width: 100%;
            height: auto;
            max-width: 400px;
          }
        `}</style>
      </div>
    );
  }
}
