import Link from 'next/link'

import Header from './components/Header'
import Footer from './components/Footer'
import { CaseStudySection } from '../styles/base'
import { Hero, HeroAside } from '../styles/pages/home'

export default () => {
  return (
    <div>
      <Header home fixed />

      <Hero>
        <HeroAside>
          <img
            src='static/logo.png'
            alt='David Stoker UX' />
        </HeroAside>

        <HeroAside>
          <h2>
            I’m an experienced, multi-disciplinary designer driven by a desire
            to create user-friendly products that make a difference
            in people’s lives.
          </h2>
        </HeroAside>
      </Hero>

      <Link prefetch href='/case-studies/vmsa'>
        <CaseStudySection firstSection vmsa>
          <div className='case-study-tab'><small>CASE STUDY 1</small></div>
          <span />
          <h2>The Violin Making School of America</h2>
          <p>Even a place of learning can use some bells and whistles</p>
        </CaseStudySection>
      </Link>

      <Link prefetch href='/case-studies/moviepass'>
        <CaseStudySection movie>
          <div className='case-study-tab'><small>CASE STUDY 2</small></div>
          <span />
          <h2>Moviepass</h2>
          <p>Your idea's a success and that's a problem.</p>
        </CaseStudySection>
      </Link>

      <Link prefetch href='/case-studies/homework'>
        <CaseStudySection homework>
          <div className='case-study-tab'><small>CASE STUDY 3</small></div>
          <span />
          <h2>My Homework Saver</h2>
          <p>Can a new mobile app solve an old paper problem</p>
        </CaseStudySection>
      </Link>

      <Footer />
    </div>
  )
}
