import React, { Component, CSSProperties } from 'react';
import styles from "./typography.module.scss";
import ClassName from "classnames";

interface ITypographyProp
{
    component: string;
    className?: string;
}

export class Typography extends Component<ITypographyProp, {}>
{
    render()
    {
        return React.createElement(this.props.component, { ...this.props, className: ClassName(styles.typography, { [this.props.className as string]: Boolean(this.props.className) }) }, this.props.children);
    }
}