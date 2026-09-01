import React from 'react'
import Hero from './sections/Hero'
import Special from './sections/Special'
import Menu from './sections/Menu'
import Place from './sections/Place'
import Blog from './sections/Blog'

function Home() {
    return (
        <main>
            <Hero />
            <Special />
            <Menu />
            <Place />
            <Blog />
        </main>
    )
}

export default Home
