import React, { Component } from 'react';
import { List, IListItem } from '../list/List';
import { withRouter } from 'react-router-dom'

export interface ILeftNavProp
{
    className?: string;
    items: Array<IListItem>;
    history: any;
    location: any;
    match: any;
}

export class __LeftNav extends Component<ILeftNavProp, {}>
{
    private SelectedKey(location: string, items: Array<IListItem>)
    {
        const path_to_key = new Map<string, string>();

        items.forEach(item =>
        {
            const result = location.match(item.to as string);
            if (result)
            {
                path_to_key.set(item.to as string, item.key);
            }
        });

        const keys = [...path_to_key.keys()];
        if (keys.length === 0)
        {
            return items[0].key;
        }
        const selected_link = keys.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
        return path_to_key.get(selected_link);
    }

    render()
    {
        const selected_key = this.SelectedKey(this.props.location.pathname, this.props.items);

        return (
            <div className={this.props.className}>
                <List
                    selectedKey={selected_key}
                    items={this.props.items}></List>
            </div >
        );
    }
}

export const LeftNav = withRouter<ILeftNavProp>(__LeftNav as any);
