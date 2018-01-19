import Link from 'next/link'

import Header from '../../components/Header'
import { CaseStudySection } from '../../styles/base'

export default () => {
  return (
    <div>
      <Header />

      <Link prefetch href='/case-studies/vmsa'>
        <CaseStudySection vmsa>
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
    </div>
  )
}
