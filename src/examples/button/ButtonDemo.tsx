import React, { Component } from 'react';
import styles from "./button-demo.module.scss";
import { Button } from '../../components/button/Button';
import { BasicCode } from './BasicCode';
import { OutlineCode } from './OutlineCode';

export interface IButtonBasic
{

}

export class ButtonBasic extends Component<IButtonBasic, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Button type="primary">primary</Button>
                    <Button type="secondary">secondary</Button>
                    <Button type="success">success</Button>
                    <Button type="danger">danger</Button>
                    <Button type="warning">warning</Button>
                    <Button type="info">info</Button>
                    <Button type="light">light</Button>
                    <Button type="dark">dark</Button>
                </div>
                <div className={styles["site-code-container"]}>
                    <BasicCode></BasicCode>
                </div>
            </div>
        );
    }
}

export interface IButtonOutline
{

}

export class ButtonOutline extends Component<IButtonOutline, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <Button type="outline-primary">primary</Button>
                    <Button type="outline-secondary">secondary</Button>
                    <Button type="outline-success">success</Button>
                    <Button type="outline-danger">danger</Button>
                    <Button type="outline-warning">warning</Button>
                    <Button type="outline-info">info</Button>
                    <Button type="outline-light">light</Button>
                    <Button type="outline-dark">dark</Button>
                </div>
                <div className={styles["site-code-container"]}>
                    <OutlineCode></OutlineCode>
                </div>
            </div>
        );
    }
}