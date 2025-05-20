import Events from '@/components/events'
import Hero from '@/components/hero'
import { Clock, LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page:React.FC = () => {
    return (
        <section>
            {/* Hero */}
            <Hero
                title='Events'
                subtitle='Give a helping hand for poor people'
                bgImage='https://wp.xpeedstudio.com/charitious/wp-content/uploads/2018/04/event_bg.jpg'
            >
                <a href="https://wp.xpeedstudio.com/charitious">
                    Home
                </a> / Events
            </Hero>
            {/* Event list */}
            <Events isEventPage={false} />
        </section>
    )
}

export default Page
