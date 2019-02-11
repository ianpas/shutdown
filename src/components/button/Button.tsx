import React, { Component } from 'react';
import styles from "./button.module.scss";
import ClassName from "classnames";

export interface IButtonProp
{
    type: string
}

export class Button extends Component<IButtonProp, {}>
{
    render()
    {
        const class_name = ClassName({
            [styles["btn-primary"]]: Boolean(!this.props.type),
            [styles[`btn-${this.props.type}`]]: Boolean(this.props.type)
        });

        return (
            <button className={class_name}>
                {this.props.children}
            </button>
        );
    }
}