import React, { Component } from 'react';
import styles from "./nav-demo.module.scss";
import { Nav } from '../../components/nav/Nav';
import logo from "../asset/logo.svg";
import { NavCode } from './NavCode';
import { LeftNavCode } from './LeftNavCode';
import { LeftNav } from '../../components/nav/LeftNav';

export interface INavTop
{

}

export class NavTop extends Component<INavTop, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Nav
                        logoSrc={logo}
                        links={
                            [{ name: "Home", to: "/", key: "home" },
                            { name: "Documentation", to: "/documentation", key: "doc" }]
                        }>
                    </Nav>
                </div>
                <div className={styles["site-code-container"]}>
                    <NavCode></NavCode>
                </div>
            </div>
        );
    }
}

export interface INavLeft
{

}

export class NavLeft extends Component<INavLeft, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <LeftNav
                        className={styles.nav}
                        items={[
                            { text: "Introduction", key: "intro", to: "/documentation/introduction" },
                            { text: "Layout", key: "layout", to: "/documentation/layout" },
                            { text: "Components", key: "components", to: "/documentation/components" },
                            { text: "Button", key: "button", to: "/documentation/components/button", nested: true },
                            { text: "List", key: "list", to: "/documentation/components/list", nested: true },
                            { text: "Nav", key: "nav", to: "/documentation/components/nav", nested: true }
                        ]}>
                    </LeftNav>
                </div>
                <div className={styles["site-code-container"]}>
                    <LeftNavCode></LeftNavCode>
                </div>
            </div>
        );
    }
}