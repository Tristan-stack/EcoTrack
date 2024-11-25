import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import AppSidebar from './dashboard/app-sidebar'

import React from 'react'

type Props = {
    children: React.ReactNode
}

const SidebarLayout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full m-2'>
                {/* Bento */}
                <div className='border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-auto h-[calc(100vh-6rem)] p-4'>
                    {children}
                </div>

            </main>
        </SidebarProvider>
    )
}

export default SidebarLayout