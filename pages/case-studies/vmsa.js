import Header from '../components/Header'
import Footer from '../components/Footer'

import { ImageSection, Section, CaseStudySection } from '../../styles/base'

export default () => {
  return (
    <div>
      <Header vmsa />
      <div>
        <CaseStudySection vmsa>
          <h2>The Violin Making School of America</h2>
          <p>WEBSITE REDESIGN AND MARKETING FOCUS</p>
        </CaseStudySection>

        <Section>
          <h3 className='sub-head'>OVERVIEW</h3>
          <h1>
            The foremost school of violin-making in the US should have a
            waiting list, not empty chairs.
          </h1>
          <p>
            The Violin Making School of America was the first of its kind in
            the United States. Since its creation, two other schools of violin
            making have opened in Chicago and Boston. Enrollment is consistently
            less than the school has room to accommodate, which means losing up
            to $140,000 a year of tuition and fees.
          </p>
        </Section>

        <ImageSection>
          <div><img src='/static/vmsa/screenshot1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/screenshot2.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Current site: Too much information, with no visual priority. Need
            to keep in mind who’s viewing the site and what’s useful and engaging
            to them.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>THE PROBLEM</h3>
          <h1>
            You were going to be a world-famous luthier, but couldn’t stay awake.
          </h1>
          <p>
            The current site was throwing out too much information, and in a
            way that was hard to browse and even harder to stay engaged. The
            resulting long-winded style didn’t encourage potential enrollees to
            keep learning about the school and get excited about their future
            career.
          </p>
          <h1>
            “Where are we?!”
          </h1>
          <p>
            Bird on a Wire, (anyone?). Redundant navigation can be a good thing.
            But confusing, inconsistent navigation — bad. Current site had
            different navigations on different pages, and users often scrolled
            to the footer to find usable navigation.
          </p>
        </Section>

        <ImageSection>
          <div><img src='/static/vmsa/nav1.png' alt='David Stoker UX' /></div>
          <div style={{flexBasis: '430px'}}><img src='/static/vmsa/nav2.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/nav3.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Different pages with different navigation leads to confusion.
            And confusion leads to the dark side.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head no-padding'>PERSONAS</h3>
        </Section>

        <ImageSection white small>
          <div><img src='/static/vmsa/persona-hanna.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/persona-kenn.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/persona-louis.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>MY ROLE</h3>
          <p>
            I gathered initial research after interviews with students, staff
            and researching competitors. I devised objectives to improve design
            and marketing focus of the site, and proposed how they could be
            achieved. Next moved into design work creating personas, testing
            the current site, wireframing and testing prototypes of the new design.
            <br />
            <br />
            Also produced photography for the new site. Wrote, directed and
            edited a video piece for the school as well.
          </p>

          <h1 className='border-header'>
            Something as beautiful and rich as violin making should have a
            website that reflects the same aesthetic.
          </h1>
        </Section>
      </div>
      <Footer />
    </div>
  )
}
