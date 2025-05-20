import React from 'react'
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

interface ISkeletonWrapperProps {
    children: React.ReactNode,
    isLoading: boolean,
    fullWidth?: boolean,
}

const EventSkeleton: React.FC<ISkeletonWrapperProps> = ({children, isLoading, fullWidth = true}: ISkeletonWrapperProps) => {
    if(!isLoading) return children;
    return (
        <Skeleton className={cn(fullWidth && 'w-full')}>
            <div className='opacity-0'>
                {children}
            </div>
        </Skeleton>
    );
}

export default EventSkeleton
