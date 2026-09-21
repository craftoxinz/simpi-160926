import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavGroup } from '@/types';

interface NavCollapsibleProps {
    group: NavGroup;
}

export function NavCollapsible({ group }: NavCollapsibleProps) {
    const { isCurrentUrl } = useCurrentUrl();

    const isGroupActive = group.items.some((item) => isCurrentUrl(item.href));
    const IconComponent = group.icon;

    return (
        <SidebarMenuItem>
            <Collapsible
                defaultOpen={isGroupActive}
                className="group/collapsible"
            >
                <CollapsibleTrigger
                    render={
                        <SidebarMenuButton tooltip={group.title}>
                            {IconComponent && <IconComponent />}
                            <span>{group.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    }
                ></CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {group.items.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton
                                    isActive={isCurrentUrl(item.href)}
                                    render={
                                        <Link
                                            href={item.href}
                                            className="flex items-center"
                                        >
                                            <span className="truncate">
                                                {item.title}
                                            </span>
                                            {item.badge && (
                                                <span className="ml-auto shrink-0 rounded bg-indigo-500/10 px-1 py-0.5 text-[9px] leading-none font-semibold text-indigo-500">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </Link>
                                    }
                                ></SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}
