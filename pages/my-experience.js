import Header from '../components/Header'

import { TimelineContainer, TimeLineSection, TimeLineAside, AsidePlaceholder, MiddleText } from '../styles/pages/my-experience'

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
              src='/static/my-experience/degree.png'
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
          <MiddleText>
            <p>RESEARCHING</p>
            <p>EMPATHY</p>
            <p>IDEATING</p>
            <p>PRESENTING</p>
          </MiddleText>
          <AsidePlaceholder />
        </TimeLineSection>

        <TimeLineSection>
          <AsidePlaceholder />
          <MiddleText className='middle-text'>
            <p>INTERVIEWING</p>
            <p>STORYTELLING</p>
          </MiddleText>
          <TimeLineAside rightAside>
            <img
              className='top-img'
              src='/static/my-experience/videography.png'
              alt='David Stoker UX' />
            <h3>
              Videography work
            </h3>
            <p>
              When I’m interviewing real people featured in a video they’re
              often unsure and nervous. I try to set them at ease and guide
              them to offer personal and authentic responses.
            </p>
          </TimeLineAside>
        </TimeLineSection>

        <TimeLineSection>
          <TimeLineAside>
            <img
              className='top-img'
              src='/static/my-experience/photographer.png'
              alt='David Stoker UX' />
            <h3>
              Commercial photographer
            </h3>
            <p>
              Directing a shoot is a mix of calling the shots, and listening to
              and respecting other team members who bring their unique
              abilities. Plus, there’s always, always something that goes wrong
              - so being quick on my feet and getting help from others is vital.
            </p>
            <p>
              I worked with CompHealth to shoot new photography for a 2014
              rebrand. I directed and worked with a team of 15, with over 40
              talent for a week-long shoot. The rebrand was named best new
              brand by the Utah Marketers Association.
            </p>
          </TimeLineAside>
          <MiddleText>
            <p>TEAMWORK</p>
            <p>COMMUNICATION</p>
            <p>PROBLEM SOLVING</p>
            <p>PROJECT MANAGEMENT</p>
          </MiddleText>
          <AsidePlaceholder />
        </TimeLineSection>

        <TimeLineSection>
          <AsidePlaceholder />
          <MiddleText>
            <p>VISUAL DESIGN</p>
            <p>GRID SYSTEMS</p>
            <p>STYLE GUIDES</p>
          </MiddleText>
          <TimeLineAside rightAside>
            <img
              className='top-img'
              src='/static/my-experience/graphic-designer.png'
              alt='David Stoker UX' />
            <h3>
              Graphic designer
            </h3>
            <p>
              My work as the designer at Utah Business magazine taught me the
              importance of grid systems and consistency. The viewer needs to
              know how to navigate a web site as well as a magazine, and be
              able to easily find the information they need.
            </p>
          </TimeLineAside>
        </TimeLineSection>

        <TimeLineSection>
          <TimeLineAside>
            <img
              className='top-img'
              src='/static/my-experience/music.png'
              alt='David Stoker UX' />
            <h3>
              Composed, recorded and produced an album
            </h3>
            <p>
              Something I always wanted to do. I gathered a handful of musicians
               and recorded an album of original pieces and arrangements. Then
               designed album artwork, promotional mailers, performed at arts
               festivals, self-produced a concert, and even got some press.
            </p>
            <p>
              Checked one off the bucket list!
            </p>
          </TimeLineAside>
          <MiddleText>
            <p>COLLABORATION</p>
            <p>RESOURCEFULNESS</p>
          </MiddleText>
          <AsidePlaceholder />
        </TimeLineSection>
      </TimelineContainer>
    </div>
  )
}
