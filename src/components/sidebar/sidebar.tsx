import { useMemo, useState } from "react";
import { BOTTOM_ITEMS, TOP_ITEMS } from "./icons";
import { Aside, Header, AvatarWrapper, Nav, NavItem, Bottom, COLLAPSED, EXPANDED } from "./sidebar.styled";

import type { T_SidebarProps } from "./types";

const user_default_props = {
    avatar: "",
    name: "Daniel"
}

export default function Sidebar({ onNavigate, user = user_default_props, activeKey }: T_SidebarProps) {
    const [hoverOpen, setHoverOpen] = useState(false);

    const width = useMemo(() => hoverOpen ? EXPANDED : COLLAPSED, [hoverOpen]);

    const items = useMemo(() => ({ top: TOP_ITEMS, bottom: BOTTOM_ITEMS }), []);

    return (
        <Aside
            role="navigation"
            aria-label="Main"
            $open={hoverOpen}
            style={{ width }}
            onMouseEnter={() => setHoverOpen(true)}
            onMouseLeave={() => setHoverOpen(false)}
        >
            <Header>
                <AvatarWrapper $open={hoverOpen} aria-hidden={!hoverOpen}>
                    {user.avatar}
                    <div className="name">{user.name}</div>
                </AvatarWrapper>
            </Header>

            <Nav>
                {items.top.map((it) => (
                    <NavItem
                        key={it.key}
                        $active={activeKey === it.key}
                        $open={hoverOpen}
                        onClick={() => onNavigate?.(it.key)}
                        tabIndex={0}
                        role="link"
                        aria-current={activeKey === it.key ? "page" : undefined}
                        data-tooltip={hoverOpen ? undefined : it.label}
                    >
                        <it.icon size={14} />
                        <span className="label">{it.label}</span>
                    </NavItem>
                ))}
            </Nav>
            <Bottom>
                {items.bottom.map((it) => (
                    <NavItem
                        key={it.key}
                        $open={hoverOpen}
                        onClick={() => onNavigate?.(it.key)}
                        tabIndex={0}
                        role="link"
                        data-tooltip={hoverOpen ? undefined : it.label}
                    >
                        <it.icon size={18} />
                        <span className="label">{it.label}</span>
                    </NavItem>
                ))}
            </Bottom>
        </Aside>
    );
}

