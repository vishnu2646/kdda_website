import React from 'react';
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({ children }: DashboardLayoutProps) => {

    return (
        <section className='relative h-screen w-full flex flex-col'>
            <div className="w-full">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                            <div className="flex items-center gap-2 px-3">
                                <SidebarTrigger />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                            </div>
                        </header>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </section>
    )
}

export default DashboardLayout
