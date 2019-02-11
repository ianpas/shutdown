import React, { Component } from 'react';
import styles from "./col.module.scss";
import ClassName from "classnames";

export interface IColProp
{
    span?: number;
}

export class Col extends Component<IColProp, {}>
{
    render()
    {
        const class_name = ClassName({
            [styles[`col-${this.props.span}`]]: Boolean(this.props.span),
            [styles.col]: !Boolean(this.props.span)
        });

        return (
            <div className={class_name}>
                {this.props.children}
            </div>
        );
    }
}