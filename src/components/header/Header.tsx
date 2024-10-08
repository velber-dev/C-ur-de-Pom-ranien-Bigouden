import "./header.scss";

import React, { useState } from "react";

import { logo, phones, Navbar, body, BodyClasses } from "../generalData/generalData";

import close from "../../assets/img/close.svg";

function Header() {
  const [hideMenuShow, setHideMenuShow] = useState<boolean>(false);

  function onToggleHideMenu(show: boolean) {
    if (hideMenuShow !== show) {
      const hideMenuTransition: number = 250;

      if (show) {
        body.toggleClass(BodyClasses.HiddenMenu, true);
      } else {
        setTimeout(() => {
          body.toggleClass(BodyClasses.HiddenMenu, false);
        }, hideMenuTransition);
      }

      setTimeout(() => {
        setHideMenuShow(show);
      }, 0);
    }
  }

  let hideMenuClass = "hide-menu";

  if (hideMenuShow) {
    hideMenuClass += " hide-menu--show";
  }

  return (
    <>
      <div className={hideMenuClass}>
        <div className="hide-menu__wrapper">
          <div
            className="hide-menu__background"
            onClick={() => {
              onToggleHideMenu(false);
            }}
          ></div>
          <div className="hide-menu__inner container-fluid">
            <div className="hide-menu__close">
              <img
                className="hide-menu__close-icon"
                alt=""
                src={close}
                onClick={() => {
                  onToggleHideMenu(false);
                }}
              />
            </div>

            <nav className="hide-menu__nav nav">
              <Navbar.Links extaFunction={() => onToggleHideMenu(false)} />
            </nav>

            <ul className="hide-menu__phones">
              {phones.map((phone, i) => (
                <li className="hide-menu__phone" key={i}>
                  <a className="phone" href={"tel:" + phone}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header__container container">
          <img className="logo" src={logo} alt="Cœur de Poméranien Bigouden" />

          <nav className="header__nav nav">
            <Navbar.Links />
          </nav>

          <ul className="header__phones">
            <li className="header__phone">
              <a className="phone" href={"tel:" + phones[0]}>
                <svg className="phone__icon" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.3425 14.7096L14.8125 13.2396C15.0105 13.044 15.261 12.9102 15.5336 12.8543C15.8062 12.7983 16.0891 12.8228 16.3481 12.9246L18.1397 13.6399C18.4014 13.7461 18.6258 13.9274 18.7846 14.161C18.9435 14.3946 19.0296 14.6699 19.0322 14.9524V18.2336C19.0307 18.4258 18.9903 18.6156 18.9134 18.7917C18.8366 18.9678 18.7249 19.1266 18.5852 19.2584C18.4454 19.3902 18.2803 19.4924 18.1 19.5588C17.9197 19.6251 17.7278 19.6543 17.5359 19.6446C4.98186 18.8636 2.44874 8.23237 1.96968 4.16362C1.94744 3.96382 1.96776 3.76157 2.0293 3.57018C2.09084 3.37879 2.1922 3.2026 2.32672 3.0532C2.46124 2.9038 2.62587 2.78458 2.80978 2.70337C2.99369 2.62217 3.19271 2.58082 3.39374 2.58206H6.56343C6.84628 2.5829 7.12241 2.66833 7.35631 2.82738C7.5902 2.98643 7.77117 3.21182 7.87593 3.47456L8.59124 5.26612C8.69641 5.52407 8.72324 5.80729 8.66838 6.0804C8.61353 6.35351 8.47941 6.60441 8.2828 6.80175L6.8128 8.27175C6.8128 8.27175 7.65936 14.0008 13.3425 14.7096Z"
                    fill="#492C0E"
                  />
                </svg>
                {phones[0]}
              </a>
            </li>
            <li className="header__phone">
              <a className="phone" href={"tel:" + phones[1]}>
                {phones[1]}
              </a>
            </li>
          </ul>

          <div
            className="header__hide-menu"
            onClick={() => {
              onToggleHideMenu(true);
            }}
          >
            <div className="header__hide-menu-line"></div>
            <div className="header__hide-menu-line"></div>
            <div className="header__hide-menu-line"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
