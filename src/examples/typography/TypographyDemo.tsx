import React, { Component } from 'react';
import styles from "./typography-demo.module.scss";
import { Typography } from '../../components/typography/typography';

export interface ITypographyBasic
{

}

export class TypographyBasic extends Component<ITypographyBasic, {}>
{
    render()
    {
        return (
            <div>
                <Typography component="h1">After bootstrap, shutdown.</Typography>
                <h1>After bootstrap, shutdown.</h1>
            </div>
        );
    }
}