import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from "react-redux";
import Image from 'next/image';

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    if (typeof window !== 'undefined') window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <div className={"" + props.hclass}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          {/* no horizontal padding on mobile */}
          <div className="container-fluid px-0">
            {/* no column gutters on mobile */}
            <div className="row align-items-center g-0">
              {/* Logo — far left on mobile & desktop */}
              <div className="col-6 col-md-3 col-lg-1 order-1 order-lg-1 p-0 ps-lg-3">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand d-inline-flex align-items-center p-0 m-0" href="/">
                    <Image src="/Logo/shamba.svg" alt="Logo" width={120} height={50} />
                  </Link>
                </div>
              </div>

              {/* Mobile toggler — far right on mobile only */}
              <div className="col-6 d-lg-none order-2 text-end p-0 pe-lg-3">
                <MobileMenu />
              </div>

              {/* Desktop nav (hidden on mobile) */}
              <div className="col-lg-8 d-none d-lg-block order-lg-2">
                <div id="navbar" className="collapse navbar-collapse navigation-holder show">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/about">About</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#">Products</Link>
                      <ul className="sub-menu">
                        <li><a href="https://cashboost.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>CashBoost</a></li>
                        <li><a href="https://vetcare.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>VetCare</a></li>
                        <li><a href="https://connect.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>Shamba Connect</a></li>
                        <li><a href="https://carbongrow.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>CarbonGrow</a></li>
                        <li><a href="https://smartseason.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>SmartSeason</a></li>
                        <li><a href="https://tracexpert.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>TraceXpert</a></li>
                        <li><a href="https://insurance.shambarecords.com" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>Shamba Shield</a></li>
                        <li><a href="https://fundraiser.shambarecords.com/" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>Farmer Coupons</a></li>
                        <li><a href="https://microvault.shambarecords.com/" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>MicroVault</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/derisking">De-Risking</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/impact">Impact</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/faq">Faq</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Desktop right actions (hidden on mobile) */}
              <div className="col-lg-3 d-none d-lg-block order-lg-3">
                <div className="header-right">
                  <div className="close-form">
                    <Link onClick={ClickHandler} className="theme-btn" href="https://erp.shambarecords.com/login">
                      Register <i className="flaticon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>{/* row */}
          </div>{/* container-fluid */}
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cartList.cart,
});

export default connect(mapStateToProps)(Header);
