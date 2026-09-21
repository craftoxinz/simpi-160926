import { Link } from '@inertiajs/react';

import { NavCollapsible } from '@/components/nav-collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem, NavSection } from '@/types';

interface NavSectionProps {
    section: NavSection;
    items?: NavItem[];
}

export function NavSection({ section, items }: NavSectionProps) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarMenu>
                {items?.map((item) => {
                    const IconComponent = item.icon;

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                isActive={isCurrentUrl(item.href)}
                                tooltip={item.title}
                                render={
                                    <Link href={item.href}>
                                        {IconComponent && <IconComponent />}
                                        <span>{item.title}</span>
                                    </Link>
                                }
                            />
                        </SidebarMenuItem>
                    );
                })}

                {section.groups?.map((group) => (
                    <NavCollapsible key={group.title} group={group} />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
