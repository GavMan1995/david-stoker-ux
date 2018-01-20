import { Component } from 'react'
import Header from '../components/Header'
import Link from 'next/link'

import { Button } from '../styles/base'
import {
  TimelineContainer,
  TimeLineSection,
  TimeLineAside,
  AsidePlaceholder,
  MiddleText
} from '../styles/pages/my-experience'

export default class MyExperience extends Component {
  constructor () {
    super()

    this.state = {
      playSong: false
    }
  }

  render () {
    let audio = ''
    if (this.state.playSong) {
      audio = (
        <audio autoPlay>
          <source src='/static/cliffs-of-dooneen.m4a' />
        </audio>
      )
    }

    return (
      <div>
        <Header fixed id='top' />
        <TimelineContainer>
          <div className='img-container'>
            <img src='/static/my-experience/profile.png' alt='David Stoker UX' />
            <small>Scrubbed and Shorn</small>
          </div>

          <TimeLineSection>
            <MiddleText>
              <p>RESEARCHING</p>
              <p>EMPATHY</p>
              <p>IDEATING</p>
              <p>PRESENTING</p>
            </MiddleText>
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
              <img
                className='side-img'
                src='/static/my-experience/degree-side.png'
                alt='David Stoker UX' />
              <i>
                My recent work at Pluralsight had me creating concepts for their
                social channels. I developed offbeat, fun ideas that spoke to the
                personalities and culture of their core users increasing
                engagement and response across all channels.
              </i>
            </TimeLineAside>
            <AsidePlaceholder />
          </TimeLineSection>

          <TimeLineSection>
            <MiddleText className='middle-text'>
              <p>INTERVIEWING</p>
              <p>STORYTELLING</p>
            </MiddleText>
            <AsidePlaceholder />
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
            <MiddleText>
              <p>TEAMWORK</p>
              <p>COMMUNICATION</p>
              <p>PROBLEM SOLVING</p>
              <p>PROJECT MANAGEMENT</p>
            </MiddleText>
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
              <img
                className='side-img'
                src='/static/my-experience/photographer-side.png'
                alt='David Stoker UX' />
              <i>
                I worked with CompHealth to shoot new photography for a 2014
                rebrand. I directed and worked with a team of 15, with over 40
                talent for a week-long shoot. The rebrand was named best new
                brand by the Utah Marketers Association.
              </i>
            </TimeLineAside>
            <AsidePlaceholder />
          </TimeLineSection>

          <TimeLineSection>
            <MiddleText>
              <p>VISUAL DESIGN</p>
              <p>GRID SYSTEMS</p>
              <p>STYLE GUIDES</p>
            </MiddleText>
            <AsidePlaceholder />
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
            <MiddleText>
              <p>COLLABORATION</p>
              <p>RESOURCEFULNESS</p>
            </MiddleText>
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

              <div className='bottom-note'>
                {audio}
                <p>
                  If you’ve got nothing to do for the next 4:07 minutes,
                  have a listen to one of the tracks.
                </p>
                <small onClick={this.playSong.bind(this)}>
                  <img src='/static/my-experience/music.svg' alt='' />
                  {this.state.playSong ? 'PLAYING' : ''} THE CLIFFS OF DOONEEN
                </small>
              </div>
            </TimeLineAside>
            <AsidePlaceholder />
          </TimeLineSection>

          <TimeLineSection>
            <MiddleText>
              <p>DESIGN THINKING</p>
            </MiddleText>
            <AsidePlaceholder />
            <TimeLineAside rightAside>
              <img
                className='top-img'
                src='/static/my-experience/idf.png'
                alt='David Stoker UX' />
              <h3>
                Interactive Design Foundation
              </h3>
              <p>
                Completed online courses on design thinking through the
                highly-regarded Interactive Design Foundation, a nonprofit
                focused on providing top-notch curricular materials for global
                design education.
              </p>
            </TimeLineAside>
          </TimeLineSection>

          <TimeLineSection bottom>
            <p>READY FOR THE NEXT CHALLENGE</p>
            <Link href='/contact'>
              <Button>CONTACT ME</Button>
            </Link>

            <a className='to-top' href='#top'>
              <p>^</p>
              <small>TOP</small>
            </a>
          </TimeLineSection>
        </TimelineContainer>
      </div>
    )
  }

  playSong () {
    this.setState({playSong: true})
  }
}
