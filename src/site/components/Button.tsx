import React, { Component } from 'react';
import styles from "./button.module.scss";
import { Typography } from '../../components/typography/typography';
import { ButtonBasic, ButtonOutline } from '../../examples/button/ButtonDemo';
import { ButtonAPI } from '../../examples/button/ButtonAPI';

export class Button extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1" >Button</Typography>
                <Typography component="p" >There are basically two types of button, basic one and outlined. Button styles follw bootstrap.</Typography>
                <Typography component="h1">Basic</Typography>
                <ButtonBasic></ButtonBasic>
                <Typography component="h1" >Outline buttons</Typography>
                <ButtonOutline></ButtonOutline>
                <Typography component="h1" >API</Typography>
                <Typography component="h2" >Button</Typography>
                <ButtonAPI></ButtonAPI>
            </article>
        );
    }
}