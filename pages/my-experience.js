import Header from '../components/Header'

import { TimelineContainer, TimeLineSection, TimeLineAside, AsidePlaceholder } from '../styles/pages/my-experience'

export default () => {
  return (
    <div>
      <Header fixed />
      <TimelineContainer>
        <div className='img-container'>
          <img src='/static/my-experience/profile.png' alt='David Stoker UX' />
          <small>Scrubbed and Shorn</small>
        </div>

        <TimeLineSection>
          <TimeLineAside>
            <img
              className='top-img'
              src='/static/my-experience/state-fair-final.png'
              alt='David Stoker UX' />
            <h3>
              A degree in advertising and work as an art director
            </h3>
            <p>
              From college to ad agencies, I learned to begin every project by
              first understanding the customer, the user – then figuring out
              ways to connect with them. And powerful, meaningful connections
              often come from paring down all a company wants to say.
            </p>
            <p>
              My recent work at Pluralsight had me creating concepts for their
              social channels. I developed offbeat, fun ideas that spoke to the
              personalities and culture of their core users increasing
              engagement and response across all channels.
            </p>
          </TimeLineAside>

          <AsidePlaceholder />
        </TimeLineSection>
      </TimelineContainer>
    </div>
  )
}
