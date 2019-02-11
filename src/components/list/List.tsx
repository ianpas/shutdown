import React, { Component, CSSProperties } from 'react';
import styles from "./list.module.scss";
import { Link } from 'react-router-dom';
import ClassName from "classnames";

export interface IListItem
{
    text: string;
    key: string;
    to?: string;
    nested?: boolean;
}

export interface IListProp
{
    items: Array<IListItem>;
    selectedKey?: string;
}

interface IListState
{
    selectedKey?: string;
}


export class List extends Component<IListProp, IListState>
{
    constructor(props: IListProp)
    {
        super(props);
        this.state = {
            selectedKey: props.selectedKey
        };
    }

    private ListItems()
    {
        const items = this.props.items as Array<IListItem>;

        return (
            items.map(item =>
                <ListItem
                    {...item}
                    key={item.key}
                    __key={item.key}
                    onClick={this.HandleClickItem.bind(this)}
                    selected={item.key === this.state.selectedKey}>
                </ListItem>
            )
        );
    }

    componentWillReceiveProps(next: IListProp)
    {
        if (next.selectedKey !== this.props.selectedKey)
        {
            this.setState({ selectedKey: next.selectedKey });
        }
    }

    HandleClickItem(key: string)
    {
        this.setState({ selectedKey: key });
    }

    render()
    {
        return (
            <nav className={styles.list}>
                {this.ListItems()}
            </nav>
        );
    }
}

interface IListItemProp
{
    text?: string;
    to?: string;
    __key?: string;
    selected?: boolean;
    nested?: boolean;
    onClick: (key: string) => void;
}

class ListItem extends Component<IListItemProp, {}>
{
    HandleClickItem(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
    {
        this.props.onClick(this.props.__key as string);
    }

    render()
    {
        const props = {
            to: this.props.to as string,
            onClick: this.HandleClickItem.bind(this),
            className: ClassName(styles["list-item"], {
                [styles["list-item-selected"]]: Boolean(this.props.selected),
                [styles["list-item-nested"]]: Boolean(this.props.nested)
            })
        };

        return (
            this.props.to ? <Link {...props}> {this.props.text} </Link> : <a {...props}> {this.props.text}</a>
        );
    }
}