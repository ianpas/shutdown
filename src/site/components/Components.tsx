import React, { Component } from 'react';
import styles from "./components.module.scss";
import { Typography } from '../../components/typography/typography';

export class Components extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1">Components</Typography>
                <Typography component="p">Currently, there are only a few simple components and they are the minimum to build this site.</Typography>
            </article>
        );
    }
}