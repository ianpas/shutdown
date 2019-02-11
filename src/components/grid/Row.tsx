import React, { Component } from 'react';
import styles from "./row.module.scss";
import ClassName from "classnames";

export interface IRowProp
{
    justify?: string;
}

export class Row extends Component<IRowProp, {}>
{
    render()
    {
        const class_name = ClassName(styles.row,{
            [styles[`justify-content-${this.props.justify}`]]:Boolean(this.props.justify)
        });

        return (
            <div className={class_name}>
                {this.props.children}
            </div>
        );
    }
}