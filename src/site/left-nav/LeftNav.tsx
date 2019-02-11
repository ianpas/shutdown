import React, { Component } from 'react';
import styles from "./left-nav.module.scss";
import { LeftNav as LeftNavComponent } from '../../components/nav/LeftNav';

export const LeftNav = () => (
    <LeftNavComponent
        className={styles.nav}
        items={[
            { text: "Introduction", key: "intro", to: "/documentation/introduction" },
            { text: "Layout", key: "layout", to: "/documentation/layout" },
            { text: "Components", key: "components", to: "/documentation/components" },
            { text: "Button", key: "button", to: "/documentation/components/button", nested: true },
            { text: "List", key: "list", to: "/documentation/components/list", nested: true },
            { text: "Nav", key: "nav", to: "/documentation/components/nav", nested: true }
        ]}>
    </LeftNavComponent>
);