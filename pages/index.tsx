import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './components/Hero'
import { Livvic } from 'next/font/google'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const livvic = Livvic({
  subsets: ['latin'],
  weight: ['500'],
  style: 'normal',
})

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden h-screen snap-y snap-mandatory">
      <Head>
        <title>Gonzalo Vidal - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section
        id="hero"
        className={`${livvic.className} font-sans flex items-center bg-[#f6f3ee] snap-start `}
      >
        <Hero />
      </section>
      <section
        id="about"
        className={`${livvic.className} font-sans flex items-center bg-[#f6f3ee] snap-start`}
      >
        <About />
      </section>
      <section
        id="projects"
        className={`${livvic.className} font-sans flex items-center bg-[#f6f3ee] snap-center`}
      >
        <Projects />
      </section>
      {/* <div className="h-[20%] w-[99%] relative before:absolute before:top-0 before:left-0 before:right-0 before:h-full before:bg-gradient-to-b before:from-[#f6f3ee] before:to-[#212129]"></div> */}
      <section
        id="contact"
        className={`${livvic.className} font-sans flex items-center bg-[#f6f3ee] snap-center overflow-visible`}
      >
        <Contact />
      </section>
    </div>
  )
}

export default Home
