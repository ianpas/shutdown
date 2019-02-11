import React, { Component } from 'react';
import styles from "./list-demo.module.scss";
import { List } from '../../components/list/List';
import { BasicCode } from './BasicCode';
import { NestedCode } from './NestedCode';

export interface IListBasic
{

}

export class ListBasic extends Component<IListBasic, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <List items={[
                        { text: "Introduction", key: "intro" },
                        { text: "Layout", key: "layout" },
                        { text: "Components", key: "components" }
                    ]}></List>
                </div>
                <div className={styles["site-code-container"]}>
                    <BasicCode></BasicCode>
                </div>
            </div>
        );
    }
}

export interface IListNested
{

}

export class ListNested extends Component<IListNested, {}>
{
    render()
    {
        return (
            <div>
                <div className={styles["site-demo-container"]}>
                    <List items={[
                        { text: "Components", key: "components" },
                        { text: "Button", key: "button", nested: true },
                        { text: "List", key: "list", nested: true },
                        { text: "Nav", key: "nav", nested: true }
                    ]}></List>
                </div>
                <div className={styles["site-code-container"]}>
                    <NestedCode></NestedCode>
                </div>
            </div>
        );
    }
}