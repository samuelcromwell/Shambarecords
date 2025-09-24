import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import Image from 'next/image';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    

    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-1 col-md-2 col-2">
                                {/* TO DO   LOGO SIZE  */}
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/">
                                        <Image src="/Logo/shamba.svg" alt="Logo" width={120} height={50} />

                                    </Link>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-6">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
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
                                                <li>
                                                    <a
                                                        href="https://cashboost.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        CashBoost
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://vetcare.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        VetCare
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://connect.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        Shamba Connect
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://carbongrow.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        CarbonGrow
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://smartseason.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        SmartSeason
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://tracexpert.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        TraceXpert
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://insurance.shambarecords.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        Shamba Shield
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://fundraiser.shambarecords.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        Farmer Coupons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://microvault.shambarecords.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={ClickHandler}
                                                    >
                                                        MicroVault
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/derisking"> De-Risking</Link>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/impact">Impact</Link>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/faq">Faq</Link>

                                        </li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blogs">Blogs</Link>

                                        </li> */}
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/contact">Contact</Link>

                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">


                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="https://erp.shambarecords.com/login">Register <i
                                            className="flaticon-next"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps)(Header);

















