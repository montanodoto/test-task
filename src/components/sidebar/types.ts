import type { ReactNode } from "react";

export type T_SidebarProps = {
    onNavigate?: (key: string) => void
    user: { avatar?: ReactNode; name: string; },
    activeKey: string;
}
