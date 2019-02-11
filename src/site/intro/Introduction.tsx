import React, { Component } from 'react';
import styles from "./intro.module.scss";
import { Typography } from '../../components/typography/typography';

export class Introduction extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1">Introduction</Typography>
                <Typography component="p">This project is not production ready, currently it's only used for learning purpose. However, it's scalable and maintainable, not just a collection of components as one-time demo.</Typography>
                <Typography component="p">This site is built with shutdown library itself, as I learned from bootstrap a lot, "shutdown" is named inspired by "bootstrap".</Typography>
            </article>
        );
    }
}