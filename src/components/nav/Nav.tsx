import React, { Component, CSSProperties } from 'react';
import styles from "./nav.module.scss";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

export interface ILink
{
    name: string;
    to: string;
    key: string;
}

export interface INavProp
{
    backgroundColor?: string;
    logoSrc?: string;
    links: Array<ILink>;
    history: any;
    location: any;
    match: any;
}

interface INavState
{
    selectedKey?: string;
}


class __Nav extends Component<INavProp, INavState>
{
    constructor(props: INavProp)
    {
        super(props);

        this.state = {
            selectedKey: this.SelectedKey(props.location.pathname, props.links)
        };
    }

    private SelectedKey(location: string, links: Array<ILink>)
    {
        const path_to_key = new Map<string, string>();

        links.forEach(link =>
        {
            const result = location.match(link.to);
            if (result)
            {
                path_to_key.set(link.to, link.key);
            }
        });

        const selected_link = [...path_to_key.keys()].reduce((prev, curr) => prev.length > curr.length ? prev : curr);
        return path_to_key.get(selected_link);
    }

    private Links()
    {
        const links = this.props.links as Array<ILink>;

        return (
            links.map(link =>
                <NavLink
                    {...link}
                    key={link.key}
                    __key={link.key}
                    onClick={this.HandleClickLink.bind(this)}
                    selected={link.key === this.state.selectedKey}>
                </NavLink>
            )
        );
    }

    HandleClickLink(key: string)
    {
        this.setState({ selectedKey: key });
    }

    render()
    {
        const style: CSSProperties = {
            backgroundColor: this.props.backgroundColor || "#294E80"
        };

        return (
            <nav className={styles.nav} style={style}>
                <NavLogo src={this.props.logoSrc}></NavLogo>
                {this.Links()}
            </nav>
        );
    }
}

export const Nav = withRouter<INavProp>(__Nav as any);

interface INavLinkProp
{
    name?: string;
    to: string;
    __key?: string;
    selected?: boolean;
    onClick: (key: string) => void;
}

class NavLink extends Component<INavLinkProp, {}>
{
    HandleClickLink(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)
    {
        this.props.onClick(this.props.__key as string);
    }

    render()
    {
        const style: CSSProperties = {

        };

        return (
            <Link
                onClick={this.HandleClickLink.bind(this)}
                className={`${styles["nav-link"]} ${this.props.selected ? `${styles["nav-link-selected"]}` : ""}`}
                to={this.props.to}>
                {this.props.name}
            </Link>
        );
    }
}

interface INavLogoProp
{
    src?: string;
    width?: string;
    height?: string;
}

class NavLogo extends Component<INavLogoProp, {}>
{
    render()
    {
        const style: CSSProperties = {
            width: this.props.width || "40px",
            height: this.props.height || "40px"
        };

        return (
            <img
                className={styles["nav-logo"]}
                src={this.props.src || ""}
                style={style} alt="nav logo">
            </img>
        );
    }
}