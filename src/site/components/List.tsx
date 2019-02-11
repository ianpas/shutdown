import React, { Component } from 'react';
import styles from "./list.module.scss";
import { Typography } from '../../components/typography/typography';
import { ListBasic, ListNested } from '../../examples/list/ListDemo';
import { ListAPI } from '../../examples/list/ListAPI';
import { ListItemAPI } from '../../examples/list/ListItemAPI';

export class List extends Component
{
    render()
    {
        return (
            <article className={styles.article}>
                <Typography component="h1">List</Typography>
                <Typography component="p">The style of list follws material-ui.</Typography>
                <Typography component="h1">Basic</Typography>
                <ListBasic></ListBasic>
                <Typography component="h1">Nested</Typography>
                <Typography component="p">Setting "nested" to "true" results adding left padding to list item.</Typography>
                <ListNested></ListNested>
                <Typography component="h1">Link item as link</Typography>
                <Typography component="p">Link item can be used as link and the left nav of this site is built with list, see Nav part.</Typography>
                <Typography component="h1" >API</Typography>
                <Typography component="h2" >List</Typography>
                <ListAPI></ListAPI>
                <Typography component="h2" >IListItem</Typography>
                <ListItemAPI></ListItemAPI>
            </article>
        );
    }
}