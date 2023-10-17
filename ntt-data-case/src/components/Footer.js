import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="p-10 bg-blue-700 text-gray-200">
        <div className="mx-auto">
          <div className="flex flex-row justify-evenly">
            <div className="mb-5">
              <img
                className="h-8 w-auto"
                src="https://nttdata-solutions.com/tr/wp-content/themes/itelligence/img/nttdata-logo.svg"
                alt="Your Company"
              />
              <p className="text-white">
                Trusted Global Innovator <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br />
              </p>
              <br />
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  placeholder="Email"
                  className="text-gray-500 w-2/3 p-2"
                />
                <button className="p-2 w-1/3 bg-blue-950 text-white">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="flex flex-row justify-between w-96">
              <div className="mb-1 mr-5">
              <h4 className="pb-4">Title</h4>
              <ul className="text-white ">
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
              </ul>
              </div>
              <div className="mb-1 mr-5">
              <h4 className="pb-4">Title</h4>
              <ul className="text-white">
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
              </ul>
              </div>
              <div className="mb-1 mr-5">
              <h4 className="pb-4">Title</h4>
              <ul className="text-white">
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
                <li className="pb-4">
                  <a href="/">Subtitle</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full text-white px-5">
          <div className="max-w-7xl flex flex-col sm:flex-row py-1 mx-auto justify-between items-center">
            <div className="text-center w-full">
              <div className="max-w-7xl flex flex-row justify-between items-center">
                <div>
                  contact@nttdata.com
                </div>
                <div>
                  +3 9876 765 444
                </div>
                <div className="max-w-7xl flex flex-row justify-between items-center">
                  <AiOutlineInstagram />
                  <FiFacebook />
                  <AiOutlineLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
