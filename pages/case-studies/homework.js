import Header from '../components/Header'
import Footer from '../components/Footer'

import { ImageSection, Section, CaseStudySection, List, Button } from '../../styles/base'

export default () => {
  return (
    <div>
      <Header movie />
      <div>
        <CaseStudySection homework>
          <h2>My Homework Saver</h2>
          <p>MOBILE APP CONCEPT AND CREATION </p>
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
          <p>
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
        {/* <Section>
          <h3 className='sub-head'>
            PERSONAS
          </h3>

          <p>
            Subscribers to Moviepass are a broad range in age and income, but
            all with a basic tech knowledge and familiarity. Single 20-30
            somethings with no children. Couples who wish the service offered
            one pass for two of them. Surprised to see families of four
            (30-40 something parents) who were trying to use the service to suit
            their family. Even those who had raised their kids (late 50-early 60’s)
            liked the idea of the service and subscribed to Moviepass.
          </p>
        </Section>

        <ImageSection small>
          <div><img src='/static/moviepass/sketch1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/sketch2.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/sketch3.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Working out user flows, site maps and sketching screens.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>MY ROLE</h3>
          <p>
            Working with the Salt Lake chapter of the Interaction Design
            Foundation (IDF) we took on the assignment to redesign this mobile
            app and work as a group to research, give feedback on ideas, iterate,
            and test our individual concepts.
            <br />
            <br />
            I researched who’s using Moviepass, what frustrations and confusions
            they were having, and user tested the current app. Then I designed
            lo-fi and hi-fi prototypes and tested, revised and developed
            improvements with feedback from the IDF team — and of course
            potential users.
          </p>
        </Section>

        <Section center>
          <a href='https://invis.io/W7DQKR42E#/256039167_load_Screen_1' target='_blank'>
            <Button style={{marginBottom: '80px'}}>VIEW THE PROTOTYPE</Button>
          </a>
        </Section>

        <ImageSection noPadding>
          <div>
            <img src='/static/moviepass/interactive-wireframe.png' alt='David Stoker UX' />
          </div>
        </ImageSection>

        <Section center>
          <a href='https://invis.io/JHDP7JOF9#/255632809_Logo_-_Welcome' target='_blank'>
            <Button gray style={{marginBottom: '80px'}}>VIEW INTERACTIVE WIREFRAME</Button>
          </a>
        </Section>

        <Section>
          <h3 className='sub-head'>DESIGN PROCESS</h3>
          <p>
            After initial research, I tested the current app with a handful of
            people and defined areas of confusion, content and flow that was
            lacking. Then sketched out a user flow, site-map, a wireframe, and
            finally ideated, designed, tested, and iterated a hi-fi prototype
            over and over – and over.
            <br />
            <br />
            Looking through other movie-search apps like Flixster and Fandango,
            I incorporated some of their UI elements that could help the
            Moviepass app be more familiar and easier to understand.
          </p>

          <h1 className='border-header'>
            Better onboarding and showing specific steps to using the pass were
            key improvements to the app.
          </h1>
        </Section>

        <ImageSection xSmall>
          <div><img src='/static/moviepass/Tutorial1-Copy2.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/Tutorial1-Copy3.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/Tutorial1-Copy4.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/Tutorial1-Copy1.png' alt='David Stoker UX' /></div>
          <div className='hide-on-mobile'>
            <img src='/static/moviepass/Tutorial1-Copy.png' alt='David Stoker UX' />
          </div>
          <p className='sub-text'>
            Dedicated more attention to initial onboarding and understanding the
            service with 'about' screen, 'how-to' / tutorial screens. Added
            'info' buttons and first-time pop-ups throughout the app to help
            users better understand and be successful
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>CONSTRAINTS</h3>
          <h1>Can a mobile app overcome poor customer service?</h1>
          <p>
            New subscribers are wondering where their pass is, they’ve got
            questions about using the pass, why it’s not working, and struggles
            using the app. And customer service is largely unresponsive.
            (I’m getting frustrated just writing this!) The validity of the
            service is called into question, with good reason. So no, a mobile
            app can’t solve all of a company’s troubles. But, I’d hope a
            well-designed app can go a long way to help. It better!
          </p>
        </Section>

        <ImageSection xSmall>
          <div><img src='/static/moviepass/Tutorial1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/moviepass/Tutorial2.png' alt='David Stoker UX' /></div>
          <div className='hide-on-mobile'>
            <img src='/static/moviepass/Tutorial3.png' alt='David Stoker UX' />
          </div>
          <p className='sub-text'>
            Still too many words <br />
            My initial tutorial wasn’t completely working: orange text hard to
            read, reverse text not ideal, and just too wordy.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>WHAT I LEARNED</h3>
          <h1>Tutorial, schmutorial!</h1>
          <p>
            Early testing of the prototype revealed very few people could be
            bothered with a tutorial. Some didn’t even know what the word meant!
            And the younger the user, the less patience they had for such things.
            <br />
            <br />
            Users want to jump into an app and figure it out on their own as
            they go. I discovered it’s nice to offer first-time prompts, quick
            pop ups, or ‘info’ buttons to guide them as they go. Still, I’m not
            getting rid of the tutorial – somebody wants it, right?
          </p>

          <h1>Just who are you, and why should I give you money?</h1>
          <p>
            So, a sales guy knocks on my door selling that miracle orange
            cleaner. If he  asked for $20 first and then promised to show me
            his great product after that, he’d never sell anything.
            <br />
            <br />
            During user testing, people chose to discover and browse the app
            before committing. And this was a fake prototype test! Pushing for
            a credit card right away is off-putting. Better to build a
            relationship and establish trust, then let the user decide when
            it’s time to commit.
            <br />
            <br />
            And yes, I did buy that $20 bottle of miracle orange cleaner just
            gathering dust in the broom closet. The sales guy was funny.
          </p>
        </Section>

        <Section center>
          <a href='https://invis.io/W7DQKR42E#/256039167_load_Screen_1' target='_blank'>
            <Button style={{marginBottom: '80px'}}>VIEW THE PROTOTYPE</Button>
          </a>
        </Section> */}
      </div>
      <Footer case-study movie />
    </div>
  )
}
