import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Products',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'VetCare+',
                link: 'https://vetcare.shambarecords.com',
            },
            {
                id: 32,
                title: 'Shamba Connect',
                link: 'https://connect.shambarecords.com',
            },
            {
                id: 33,
                title: 'Carbon Grow',
                link: 'https://carbongrow.shambarecords.com',
            },
            {
                id: 34,
                title: 'Smart Season',
                link: 'https://smartseason.shambarecords.com',
            },
            {
                id: 35,
                title: 'TraceXpert',
                link: 'https://tracexpert.shambarecords.com',
            },
            {
                id: 36,
                title: 'Shamba Shield',
                link: 'https://insurance.shambarecords.com',
            },
            {
                id: 37,
                title: 'Shamba Cash Boost',
                link: 'https://cashboost.shambarecords.com',
            },
            {
                id: 38,
                title: 'Farmer Coupons',
                link: 'https://fundraiser.shambarecords.com/',
            },
            {
                id: 39,
                title: 'MicroVault',
                link: 'https://microvault.shambarecords.com/',
            },
        ]
    },

    {
        id: 4,
        title: 'Derisking',
        link: '/derisking',
    },
    {
        id: 5,
        title: 'Impact',
        link: '/impact',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    },
    // {
    //     id: 89,
    //     title: 'Blogs',
    //     link: '/blogs',
    // }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                           
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        // Open external product links in a new tab
                                                        const isExternal = submenu.link.startsWith('http');
                                                        return (
                                                            <ListItem key={i}>
                                                                {isExternal ? (
                                                                    <a
                                                                        href={submenu.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="active"
                                                                        onClick={ClickHandler}
                                                                    >
                                                                        {submenu.title}
                                                                    </a>
                                                                ) : (
                                                                    <Link onClick={ClickHandler} className="active" href={submenu.link}>
                                                                        {submenu.title}
                                                                    </Link>
                                                                )}
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;