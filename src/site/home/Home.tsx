import React, { Component } from 'react';
import styles from "./home.module.scss";
import logo from "../asset/dragon-48-white.svg";
import { Row } from '../../components/grid/Row';
import { Col } from '../../components/grid/Col';
import { Typography } from '../../components/typography/typography';

export class Home extends Component
{
    render()
    {
        return (
            <div className={styles.home}>
                <main className={styles.main}>
                    <Row justify="center">
                        <Col span={4}>
                            <Row justify="center">
                                <img src={logo} width="280" height="280" alt=""></img>
                            </Row>
                            <Row justify="center">
                                <Typography component="h1" className={styles["h1"]}>After bootstrap, shutdown.</Typography>
                            </Row>
                            <Row justify="center">
                                <Typography component="h3" className={styles["h3"]}>React library for learning purpose</Typography>
                            </Row>
                        </Col>
                    </Row>
                </main>
            </div>
        );
    }
}