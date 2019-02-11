import React, { Component } from 'react';
import styles from "./layout.module.scss";
import { Typography } from '../../components/typography/typography';
import { GridEqualWidth, GridBasic, FlexLayout } from '../../examples/grid/GridDemo';
import { RowAPI } from '../../examples/grid/RowAPI';
import { ColAPI } from '../../examples/grid/ColAPI';

export class Layout extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1">Layout</Typography>
                <Typography component="p" >Using 12-columns grid layout, which is built with flexbox. APIs follow ant design.</Typography>
                <Typography component="h1">Basic</Typography>
                <GridBasic></GridBasic>
                <Typography component="h1">Equal width</Typography>
                <GridEqualWidth></GridEqualWidth>
                <Typography component="h1">Flex layout</Typography>
                <FlexLayout></FlexLayout>
                <Typography component="h1">API</Typography>
                <Typography component="h2" >Row</Typography>
                <RowAPI></RowAPI>
                <Typography component="h2" >Col</Typography>
                <ColAPI></ColAPI>
            </article>
        );
    }
}