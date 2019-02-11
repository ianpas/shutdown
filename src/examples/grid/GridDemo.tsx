import React, { Component } from 'react';
import styles from "./grid-demo.module.scss";
import { Row } from '../../components/grid/Row';
import { Col } from '../../components/grid/Col';
import { EqualWidthCode } from './EqualWidthCode';
import { BasicCode } from './BasicCode';
import { Typography } from '../../components/typography/typography';
import { FlexLayoutCode } from './FlexLayoutCode';

export interface IGridEqualWidth
{

}

export class GridEqualWidth extends Component<IGridBasic, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Row>
                        <Col><div className={styles["col-demo-light"]}>col</div></Col>
                        <Col><div className={styles["col-demo-dark"]}>col</div></Col>
                        <Col><div className={styles["col-demo-light"]}>col</div></Col>
                    </Row>

                </div>
                <div className={styles["site-code-container"]}>
                    <Row>
                        <Col>
                            <EqualWidthCode></EqualWidthCode>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}


export interface IGridBasic
{

}

export class GridBasic extends Component<IGridBasic, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Row>
                        <Col span={6}><div className={styles["col-demo-light"]}>col-6</div></Col>
                        <Col span={6}><div className={styles["col-demo-dark"]}>col-6</div></Col>
                    </Row>
                    <Row>
                        <Col span={4}><div className={styles["col-demo-light"]}>col-4</div></Col>
                        <Col span={4}><div className={styles["col-demo-dark"]}>col-4</div></Col>
                        <Col span={4}><div className={styles["col-demo-light"]}>col-4</div></Col>
                    </Row>
                    <Row>
                        <Col span={3}><div className={styles["col-demo-light"]}>col-3</div></Col>
                        <Col span={3}><div className={styles["col-demo-dark"]}>col-3</div></Col>
                        <Col span={3}><div className={styles["col-demo-light"]}>col-3</div></Col>
                        <Col span={3}><div className={styles["col-demo-dark"]}>col-3</div></Col>
                    </Row>
                </div>
                <div className={styles["site-code-container"]}>
                    <Row>
                        <Col>
                            <BasicCode></BasicCode>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export interface IFlexLayout
{

}

export class FlexLayout extends Component<IFlexLayout, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Typography component="p" className={styles["p"]}>sub-element align left</Typography>
                    <Row justify="start">
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                    </Row>
                    <Typography component="p" className={styles["p"]}>sub-element align center</Typography>
                    <Row justify="center">
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                    </Row>
                    <Typography component="p" className={styles["p"]}>sub-element align right</Typography>
                    <Row justify="end">
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                    </Row>
                    <Typography component="p" className={styles["p"]}>sub-element monospaced arrangement</Typography>
                    <Row justify="between">
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                    </Row>
                    <Typography component="p" className={styles["p"]}>col-2 sub-element align full</Typography>
                    <Row justify="around">
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-light"]}>col-2</div></Col>
                        <Col span={2}><div className={styles["col-demo-dark"]}>col-2</div></Col>
                    </Row>
                </div>
                <div className={styles["site-code-container"]}>
                    <Row>
                        <Col>
                            <FlexLayoutCode></FlexLayoutCode>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}