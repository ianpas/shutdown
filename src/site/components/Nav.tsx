import React, { Component } from 'react';
import styles from "./nav.module.scss";
import { Typography } from '../../components/typography/typography';
import { NavTop,NavLeft } from '../../examples/nav/NavDemo';
import { NavAPI } from '../../examples/nav/NavAPI';
import { NavLinkAPI } from '../../examples/nav/NavLinkAPI';
import { LeftNavAPI } from '../../examples/nav/LeftNavAPI';

export class Nav extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1">Navigation</Typography>
                <Typography component="p">There are two types of nav, the one at top follows bootstrap style and the one at left follows material-ui style.</Typography>
                <Typography component="h1">Nav</Typography>
                <NavTop></NavTop>
                <Typography component="h1">LeftNav</Typography>
                <NavLeft></NavLeft>
                <Typography component="h1" >API</Typography>
                <Typography component="h2" >Nav</Typography>
                <NavAPI></NavAPI>
                <Typography component="h2" >ILink</Typography>
                <NavLinkAPI></NavLinkAPI>
                <Typography component="h2" >LeftNav</Typography>
                <LeftNavAPI></LeftNavAPI>
            </article>
        );
    }
}