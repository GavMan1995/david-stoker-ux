import Header from './components/Header'
import Footer from './components/Footer'
import { Contact } from '../styles/pages/contact'

export default () => {
  return (
    <div>
      <Header shadow />
      <Contact>
        <h3>
          Hi there. <br />
          Let me know what’s on your mind, and I’ll see if I can help.
          I’m full of empathy after all.
        </h3>

        <div className='contact-links'>
          <a href='tel:801.673.0659'>
            <h2>801.673.0659</h2>
          </a>

          <a href='mailto:hello@davidstokerux.com'>
            <h2 className='yellow'>hello@davidstokerux.com</h2>
          </a>
        </div>

        <Footer contact />
      </Contact>
    </div>
  )
}
