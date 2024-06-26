import React from "react";

function Footer() {
  return (
    <div className="roboto flex justify-center text-center items-center px-5 mb-1 mt-5 lg:px-36">
      <div className="w-full">
        <span className="font-semibold">
          © BondBox {new Date().getFullYear()}.{" "}
        </span>
        <span className="font-light">
          Made with ❤️ by {" "} {" "}
          <a
            href="https://www.linkedin.com/in/bondan-herutomo-bba025133/"
            target="_blank"
            className="text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="7.025 7.025 497.951 497.95"
              className="inline-block mr-1"
            >
              <linearGradient
                id="a"
                x1="-974.482"
                x2="-622.378"
                y1="1306.773"
                y2="1658.877"
                gradientTransform="translate(1054.43 -1226.825)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2489be"></stop>
                <stop offset="1" stopColor="#0575b3"></stop>
              </linearGradient>
              <path
                fill="url(#a)"
                d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/bondan-herutomo-bba025133/"
            target="_blank"
            className="text-primary"
          >
           {" "}  Bondan Herutomo
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default Footer;
