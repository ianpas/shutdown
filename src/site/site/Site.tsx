import React, { Component } from 'react';
import { Nav } from '../../components/nav/Nav';
import logo from "../asset/logo.svg";
import { Route } from 'react-router-dom';
import styles from "./site.module.scss";
import { Home } from '../home/Home';
import { Main } from '../main/Main';

export class Site extends Component
{
    render()
    {
        return (
            <div className={styles.site}>
                <Nav
                    logoSrc={logo}
                    links={
                        [{ name: "Home", to: "/", key: "home" },
                        { name: "Documentation", to: "/documentation", key: "doc" }]
                    }>
                </Nav>

                <Route path="/" exact component={Home} />
                <Route path="/documentation" component={Main} />
            </div >
        );
    }
}