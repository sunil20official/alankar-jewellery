import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_low_white.png";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const clickOnBurger = () => {
    setOpen(!open);
  };

  const onClickMobileBurger = (link) => {
    document
      .getElementById("mobile_hamburger")
      .classList.toggle("burger-menu-container");
    if(link !== '')
    navigate(`${link}`)
  };

  useEffect(() => {
    if (open) {
      document
        .getElementById("hamburger")
        .classList.add("burger-menu-container");
      document.getElementById("nav-bottom-links").style.opacity = "1";
      document.getElementById("nav-bottom-links").style.zIndex = "99";
      document.getElementById("logo-bg-line-cont").style.transform = "scaleY(1)";
      document.getElementById("navbar-heading").style.fontSize = "2rem";
      document.getElementById("navbar-heading").style.marginTop = "60px";
      document.getElementById("app-header").style.height = "200px";
      document.getElementById("navbar_logo").style.height = "130px";
    } else {
      document
        .getElementById("hamburger")
        .classList.remove("burger-menu-container");
      document.getElementById("nav-bottom-links").style.opacity = "0";
      document.getElementById("nav-bottom-links").style.zIndex = "-9";
      document.getElementById("logo-bg-line-cont").style.transform = "scaleY(0)";
      document.getElementById("navbar-heading").style.fontSize = "1.5rem";
      document.getElementById("navbar-heading").style.marginTop = "20px";
      document.getElementById("app-header").style.height = "100px";
      document.getElementById("navbar_logo").style.height = "120px";
    }
  }, [open]);

  return (
    <>
      <header id="app-header" className="app-header">
        <nav className="nav-header">
          <div className="container-div">
            <ul>
              {/* navbar for mobile and tab */}
              <li
                id="mobile_hamburger"
                className="ham-burger-menu"
                onClick={() => onClickMobileBurger("")}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="#fff"
                >
                  <path
                    d="M28,22.3c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4l0,0H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8c0-0.2-0.4-0.2-0.4,0c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8
	                    c0.1-0.3,0.5-0.4,0.7-0.4h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,24.2,28,22.3,28,22.3L28,22.3
	                    z"
                    transform="rotate(45deg)"
                  ></path>
                  <path
                    d="M28,15.2c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8C2.4,13,2,13,2,13.2c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,16.1,3,16,3.3,16
	                    h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,17.1,28,15.2,28,15.2L28,15.2z"
                  ></path>
                  <path
                    d="M28,8.1c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.3-0.7,0.4H3.3C3,7.3,2.7,7.2,2.5,6.9
	                     C2.4,6.7,2.4,6.3,2.4,6.1C2.4,6,2,6,2,6.1s0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,9,3,9,3.3,8.9h23.5
	                     C27,9,27.3,9,27.5,9.3c0.1,0.2,0.2,0.6,0.2,0.8s0.4,0.2,0.4,0C28,10,28,8.1,28,8.1L28,8.1L28,8.1z"
                  ></path>
                </svg>
              </li>
              {/* menu for desktop only */}
              <li
                id="hamburger"
                className={
                  "ham-burger-menu " + (open && "burger-menu-container")
                }
                onClick={() => clickOnBurger()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="#fff"
                >
                  <path
                    d="M28,22.3c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4l0,0H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8c0-0.2-0.4-0.2-0.4,0c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8
	                    c0.1-0.3,0.5-0.4,0.7-0.4h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,24.2,28,22.3,28,22.3L28,22.3
	                    z"
                    transform="rotate(45deg)"
                  ></path>
                  <path
                    d="M28,15.2c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8C2.4,13,2,13,2,13.2c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,16.1,3,16,3.3,16
	                    h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,17.1,28,15.2,28,15.2L28,15.2z"
                  ></path>
                  <path
                    d="M28,8.1c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.3-0.7,0.4H3.3C3,7.3,2.7,7.2,2.5,6.9
	                     C2.4,6.7,2.4,6.3,2.4,6.1C2.4,6,2,6,2,6.1s0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,9,3,9,3.3,8.9h23.5
	                     C27,9,27.3,9,27.5,9.3c0.1,0.2,0.2,0.6,0.2,0.8s0.4,0.2,0.4,0C28,10,28,8.1,28,8.1L28,8.1L28,8.1z"
                  ></path>
                </svg>
              </li>

              {/* phone icon */}
              {/* <li>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0608 16.8951C11.1993 17.4643 12.6224 18.0335 13.9506 18.0335C15.184 18.0335 16.9866 17.3694 17.6507 16.1361C18.125 15.1874 18.2199 14.1437 17.2712 13.5745C17.034 13.4322 16.7731 13.2899 16.5122 13.1476C16.2513 13.0053 15.9904 12.863 15.7532 12.7207C15.5635 12.6258 15.35 12.4835 15.1365 12.3412C14.9231 12.1989 14.7096 12.0565 14.5199 11.9617C14.3301 11.8668 14.2352 11.8668 14.1404 11.8668C13.666 11.8668 13.2865 12.2463 13.0019 12.6258C12.9482 12.6795 12.8642 12.8014 12.7627 12.9488C12.5053 13.3224 12.1356 13.8591 11.8634 13.8591L11.1044 13.4796C9.68133 12.7207 8.54285 11.7719 7.68899 10.6334C7.3095 10.1591 6.93001 9.58984 6.64539 9.0206C6.55052 8.92573 6.36077 8.54624 6.2659 8.26162C6.43737 8.09014 6.65728 7.91383 6.88731 7.72938C7.67546 7.09744 8.58256 6.37013 8.06849 5.41543C7.79004 5.06738 7.56268 4.66825 7.34891 4.293C7.27133 4.15681 7.19554 4.02377 7.11976 3.89746C7.02488 3.73934 6.93001 3.54959 6.83162 3.35282C6.63485 2.95927 6.42402 2.53761 6.17102 2.28462C5.88641 2.09487 5.60179 2 5.31717 2C4.55818 2 3.60945 2.47437 3.22996 2.85386C2.18636 3.99233 1.80687 5.60518 2.09148 7.12314C2.7556 9.87446 4.27356 12.2463 6.36077 14.2386C7.40437 15.2822 8.63772 16.231 10.0608 16.8951ZM3.06983 6.91432C3.68439 9.43597 5.08338 11.6369 7.05125 13.5153L7.05966 13.5233L7.06788 13.5315C8.04937 14.513 9.18944 15.3849 10.4837 15.9889L10.4959 15.9946L10.508 16.0006C11.6208 16.557 12.8678 17.0335 13.9506 17.0335C14.4091 17.0335 15.0247 16.9049 15.5921 16.6407C16.1604 16.3762 16.5671 16.0299 16.7635 15.6742C16.9514 15.294 17.0133 14.9896 16.9977 14.7917C16.9906 14.7019 16.9687 14.6433 16.9428 14.6008C16.9178 14.5596 16.8682 14.4989 16.7567 14.432C16.5403 14.3022 16.2982 14.17 16.0333 14.0255L16.0239 14.0203C15.7797 13.8871 15.5155 13.743 15.2692 13.5964C15.034 13.4748 14.7918 13.3132 14.6065 13.1896C14.5981 13.1841 14.5899 13.1786 14.5818 13.1732C14.3851 13.0421 14.2413 12.9476 14.1271 12.8848C14.1193 12.8899 14.1103 12.8963 14.1 12.904C14.0187 12.9649 13.9185 13.0702 13.8019 13.2258L13.7592 13.2826L13.7244 13.3175C13.7249 13.317 13.7253 13.3168 13.7254 13.3169C13.7263 13.3177 13.6977 13.3545 13.6202 13.4667C13.6099 13.4817 13.5989 13.4976 13.5875 13.5142C13.5104 13.6262 13.4097 13.7725 13.3038 13.9136C13.1855 14.0713 13.0293 14.2659 12.8513 14.4294C12.7217 14.5486 12.3669 14.8591 11.8634 14.8591H11.6273L10.6454 14.3682L10.6338 14.362C9.10389 13.546 7.84995 12.5105 6.89838 11.2459C6.50682 10.755 6.11222 10.1687 5.8007 9.56566C5.75888 9.50861 5.72694 9.45751 5.70613 9.42346C5.65491 9.33966 5.60566 9.24837 5.56122 9.15948C5.47365 8.98434 5.38263 8.7741 5.31721 8.57785L5.12178 7.99153L5.55879 7.55451C5.77202 7.34129 6.03764 7.1286 6.25914 6.95125C6.28501 6.93053 6.31028 6.9103 6.3348 6.8906C6.59433 6.68207 6.80839 6.50418 6.97539 6.32815C7.14577 6.14856 7.20052 6.03833 7.21488 5.98983C7.21508 5.98917 7.21541 5.98844 7.2158 5.98759C7.21813 5.98251 7.22258 5.97282 7.21303 5.94446C6.9113 5.54777 6.64837 5.08566 6.44472 4.72773C6.37712 4.60893 6.31605 4.5016 6.26226 4.41196C6.14738 4.22049 6.01954 3.96519 5.91227 3.75095C5.8686 3.66374 5.82834 3.58334 5.79375 3.51682C5.67782 3.29388 5.58916 3.1487 5.52261 3.06073C5.42253 3.0085 5.35634 3 5.31717 3C5.12354 3 4.83803 3.06692 4.53207 3.20078C4.23723 3.32977 4.03104 3.47334 3.94906 3.54944C3.16191 4.42193 2.84642 5.68413 3.06983 6.91432Z"
                    fill="#fff"
                  />
                </svg>
              </li> */}
            </ul>
            <h1 id="navbar-heading" className="navbar-heading">
              <img
                onClick={() => navigate("/")}
                id="navbar_logo"
                src={logo}
                alt="logo of alankar jewellers"
              />
            </h1>
            <ul>
              {/* location icon */}
              <li>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.07287 6.15613L4.07402 6.14886L4.07507 6.14157C4.1196 5.83013 4.31962 4.51843 5.15006 3.30102C5.94257 2.13922 7.34611 1 9.99251 1C12.5949 1 14.0532 2.2468 14.9047 3.58642C15.3414 4.27352 15.6194 4.99159 15.7873 5.58703C15.8708 5.8833 15.9253 6.14291 15.9585 6.34462C15.9751 6.44543 15.9859 6.52912 15.9923 6.59336C15.9956 6.62538 15.9976 6.65101 15.9987 6.67028L15.9993 6.68135L15.9998 6.69251L16 6.69715C16 6.69909 16 6.70002 16 6.70003V6.7C16 7.41566 15.9106 8.13416 15.7296 8.85722C15.5732 9.48233 15.2532 10.0632 14.7875 10.7149L9.99982 17.291L5.30007 10.7184L5.29331 10.7089L5.28633 10.6996C4.23139 9.29452 3.8188 7.76353 4.07287 6.15613ZM10.6127 18.1481L15.5985 11.3C16.099 10.6 16.4995 9.9 16.6997 9.1C16.8999 8.3 17 7.5 17 6.7C17 5.9 15.9989 0 9.99251 0C3.9861 0 3.18524 5.3 3.08514 6C2.78482 7.9 3.28535 9.7 4.48663 11.3L9.37961 18.1428L9.99251 19L10.6127 18.1481ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM13 7C13 8.65685 11.6569 10 10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7Z"
                    fill="#fff"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div id="logo-bg-line-cont" className="logo-bg-line-cont">
            <hr
              style={{
                margin: "35px auto 0px",
                borderTop: "1px solid #b5a663",
              }}
            />
          </div>
          <div id="nav-bottom-links" className="nav-bottom-links">
            <ul>
              <li
                onClick={() => {
                  setOpen(!open);
                  navigate("/about");
                }}
              >
                Our Legacy
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                  navigate("/store");
                }}
              >
                Our Collection
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                  navigate("/store");
                }}
              >
                Engagement & Bridal
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                  navigate("/watches");
                }}
              >
                Watches
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                  navigate("/contactus");
                }}
              >
                Our Stores
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul style={{ paddingLeft: "0px" }} className="mobile_links_container">
            <li
              
              className="mobile_nav_link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => onClickMobileBurger("/about")}
            >
              Our Legacy
            </li>
            <li
              className="mobile_nav_link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => onClickMobileBurger("/store")}
            >
              Our Collection
            </li>
            <li
              
              className="mobile_nav_link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => onClickMobileBurger("/store")}
            >
              Engagement & Bridal
            </li>
            <li
              
              className="mobile_nav_link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => onClickMobileBurger("/watches")}
            >
              Watches
            </li>
            <li
              
              className="mobile_nav_link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => onClickMobileBurger("/contactus")}
            >
              Our Stores
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;