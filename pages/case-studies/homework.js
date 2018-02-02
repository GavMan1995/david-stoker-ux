import Header from '../components/Header'
import Footer from '../components/Footer'

import { HeaderSpacer } from '../../styles/components/header'
import {
  ImageSection,
  Section,
  CaseStudySection,
  List,
  Button,
  CaseStudyTab,
  TabSpacer
} from '../../styles/base'

export default () => {
  return (
    <div>
      <Header fixed tab />
      <HeaderSpacer />
      <div>
        <CaseStudyTab homework>
          <div>
            <span>
              <small>Case Study 3</small>
            </span>
          </div>
        </CaseStudyTab>

        <TabSpacer />

        <CaseStudySection homework>
          <h2>My Homework Saver</h2>
          <h4>MOBILE APP CONCEPT AND CREATION </h4>
        </CaseStudySection>

        <Section>
          <h3 className='sub-head'>OVERVIEW</h3>
          <h1>
            After too-many lost assignments, a mobile app offers some help.
          </h1>
          <p>
            My Homework Saver is a mobile app that creates a high-quality pdf
            of paper homework corrected for perspective, contrast and sharpening.
            It’s then organized into subject folders linked directly to the
            teacher’s email. When a teacher says they never received a homework
            assigment, a student opens the app, emails the assignment and tries
            not to smirk when they say, “Please check your email.”
          </p>
        </Section>

        <ImageSection noPadding>
          <div><img src='/static/homework/papers-in-basket.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>THE PROBLEM</h3>
          <h1>
            Only the names have been changed to protect the guilty.
          </h1>
          <p>
            Rachel just started seventh grade. Within two months she already
            has had to redo five homework assignments. She says the teacher
            lost the homework due to an overwhelmed in-basket system. Her
            teacher, Ms. Wild, claims Rachel must not haved handed them in,
            and defends her overwhelmed in-basket system. Rachel’s parents are
            torn between wanting to support their daughter and the teacher.
            Everyone agrees the whole thing is a headache, and would love to
            avoid trouble in the future.
          </p>

          <h1 className='border-header'>
            Ms. Wild teaches six classes a day, with 30 students per class.
            She’s processing 180 papers per homework assignment.
          </h1>
        </Section>

        <ImageSection>
          <div><img src='/static/homework/sketch-purple-sticky-notes.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/sketch-yellow-sticky-notes.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Writing down problems and needs, then potential app features.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head no-padding'>PERSONAS</h3>
        </Section>

        <ImageSection white small>
          <div><img src='/static/homework/persona-rachel.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/persona-jaime.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/persona-helen.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>MY ROLE</h3>
          <p className='no-padding-top'>
            With some potential users of both teens and parents, I conducted
            sticky-note exercises to describe user problems and needs. I then
            fleshed out potential features and functions with a developer.
            Next, created a lo-fi, but high-fun, paper prototype to test basic
            app flow and functionality; got valuable feedback and generated new
            ideas between myself and those I was testing. Finally, hi-fi
            prototyping.
          </p>
        </Section>

        <ImageSection noPadding>
          <div><img src='/static/homework/Sketchbook-work.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>DESIGN PROCESS</h3>
          <p className='border-bottom no-padding-top'>
            After feedback from lo-fi paper prototyping, I moved to digital
            prototype design. Testing daily as the design developed, I refined
            the interface, balancing the rather mundane ‘job-to-be-done’ with
            making the experience more fun and light-hearted.
          </p>

          <h2 className='small-header'>
            Making the ‘job-to-be-done’ a little more easy and more fun.
          </h2>
          <List className='border-bottom'>
            <li>
              Break apart onboarding into a few screens so the process feels
              less overwhelming and simpler
            </li>
            <li>
              Wording throughout app can’t be stuffy and overly formal
            </li>
            <li>
              Doodle drawings relate to what teens do when they’re bored in class
            </li>
            <li>
              The drawings help the app feel more casual and fun
            </li>
            <li>
              ‘Email confirmation’ screen has a different drawing and payoff each time
            </li>
            <li>
              Personal Tutor: User can select a doodle character that appears
              on info pop-ups throughout app, and wording changes with each
              character
            </li>
          </List>
        </Section>

        <Section center>
          <a href='https://invis.io/NREG1U32F#/264792156_Logo_Screen' target='_blank'>
            <Button style={{marginBottom: '80px'}}>VIEW  THE PROTOTYPE</Button>
          </a>
        </Section>

        <ImageSection>
          <div><img src='/static/homework/sketch-blue-sticky-notes.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/sketch-white-board.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>CONSTRAINTS</h3>
          <h1>Is this all just overkill?</h1>
          <p>
            The app competes with snapping a photo on a phone and just searching
            to find it later if needed. Or making a physical copy to be stored
            somewhere. It has to be more powerful, more useful and valuable
            than the alternatives.
          </p>

          <h1>No picture, no point.</h1>
          <p>
            Encouraging students to take a pic of their homework is where it
            all starts, or collapses. The app needs to help a teen build a
            habit and see the value with notification reminders and in-app
            popups. Parents linked to their child’s app can help encourage
            student as well.
          </p>
        </Section>

        <ImageSection xSmall>
          <div><img src='/static/homework/Tutorial1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/Tutorial2.png' alt='David Stoker UX' /></div>
          <div className='hide-on-mobile'><img src='/static/homework/Tutorial3.png' alt='David Stoker UX' /></div>
          <p className='sub-text left'>Working out home screen UI.</p>
          <ul className='sub-text-list left'>
            <li>
              First round (left) saw users trying to just touch the colored
              boxes to open a folder, even though they could touch across the
              entire word.
            </li>
            <li>
              Second round (center) made it easy for users to feel like they
              could touch across the screen, but aesthetically was busy and loud
            </li>
            <li>
              Finally, incorporated grey boxes to keep the screen feeling more
              open, but still encourage users to touch easily across screen.
            </li>
          </ul>
        </ImageSection>

        <ImageSection xSmall>
          <div className='hide-on-mobile'><img src='/static/homework/Tutorial-homework-1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/Tutorial-homework-2.png' alt='David Stoker UX' /></div>
          <div className='hide-on-mobile'><img src='/static/homework/Tutorial-4.png' alt='David Stoker UX' /></div>
          <div><img src='/static/homework/Tutorial-homework-3.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Onboarding, setup and email confirmation screens for the new app.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>WHAT I LEARNED</h3>
          <h1>John Henry (me) vs. The Computer</h1>
          <p>
            Paper prototyping has a loose feel to it that’s a fun break from
            being at the computer. But it can take can take more time than
            hammering out out a basic digital wireframe. Still, it was nice
            to quickly make up new paper screens on the fly and scribble
            right onto them in the moment.
          </p>

          <h1>Turns out, students don't like homework.</h1>
          <p>
            You’re welcome. That one’s free. Suspicious teens (users) need to
            see quickly that an app is easy to use and could be a valuable asset
            for them. Incorporating some personality and light-heartedness in
            the app helps increase user engagement by making the experience
            more enjoyable.
          </p>
        </Section>

        <Section center>
          <a href='https://invis.io/NREG1U32F#/264792156_Logo_Screen' target='_blank'>
            <Button style={{marginBottom: '80px'}}>VIEW  THE PROTOTYPE</Button>
          </a>
        </Section>
      </div>
      <Footer homework />
    </div>
  )
}
