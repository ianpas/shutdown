import React, { Component } from 'react';
import styles from "./main.module.scss";
import { Row } from '../../components/grid/Row';
import { Col } from '../../components/grid/Col';
import { Route, Switch } from 'react-router-dom';
import { Introduction } from '../intro/Introduction';
import { Layout } from '../layout/Layout';
import { Components } from '../components/Components';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { LeftNav } from '../left-nav/LeftNav';
import { Nav } from '../components/Nav';

export class Main extends Component
{
    render()
    {
        return (
            <main className={styles.main}>
                <Row>
                    <Col span={2}>
                        <Route path="/documentation" render={LeftNav} />
                    </Col>
                    <Col span={10}>
                        <Switch>
                            <Route path="/documentation/introduction" exact component={Introduction} />
                            <Route path="/documentation/layout" exact component={Layout} />
                            <Route path="/documentation/components" exact component={Components} />
                            <Route path="/documentation/components/button" exact component={Button} />
                            <Route path="/documentation/components/list" exact component={List} />
                            <Route path="/documentation/components/nav" exact component={Nav} />
                            <Route path="/documentation" component={Introduction} />
                        </Switch>
                    </Col>
                </Row>
            </main >
        );
    }
}