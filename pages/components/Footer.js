import { Footer } from '../../styles/components/footer'

export default ({ contact, vmsa, movie, homework }) => {
  if (vmsa) {
    return (
      <Footer tab>
        <a href='https://medium.com/@davidhstoker' target='_blank'>
          <img src='/static/medium-logo.svg' alt='David Stoker UX' />
        </a>

        <a href='https://www.linkedin.com/in/david-stoker-2305022' target='_blank'>
          <img src='/static/linkedin-logo.svg' alt='David Stoker UX' />
        </a>

        <a className='next' href='/case-studies/moviepass'>
          <h3>Next ></h3>
          <p>YOUR IDEA'S A SUCCESS AND THAT"S A PROBLEM</p>
        </a>
      </Footer>
    )
  }

  if (movie) {
    return (
      <Footer tab>
        <a href='https://medium.com/@davidhstoker' target='_blank'>
          <img src='/static/medium-logo.svg' alt='David Stoker UX' />
        </a>

        <a href='https://www.linkedin.com/in/david-stoker-2305022' target='_blank'>
          <img src='/static/linkedin-logo.svg' alt='David Stoker UX' />
        </a>

        <a className='next' href='/case-studies/homework'>
          <h3>Next ></h3>
          <p>SAVING A TEENAGER"S NECK</p>
        </a>
      </Footer>
    )
  }

  if (homework) {
    return (
      <Footer tab>
        <a href='https://medium.com/@davidhstoker' target='_blank'>
          <img src='/static/medium-logo.svg' alt='David Stoker UX' />
        </a>

        <a href='https://www.linkedin.com/in/david-stoker-2305022' target='_blank'>
          <img src='/static/linkedin-logo.svg' alt='David Stoker UX' />
        </a>

        <a className='next' href='/case-studies/vmsa'>
          <h3>Next ></h3>
          <p>TOO MUCH INFORMATION</p>
        </a>
      </Footer>
    )
  }

  return (
    <Footer className={contact ? 'contact' : ''}>
      <a href='https://medium.com/@davidhstoker' target='_blank'>
        <img src='/static/medium-logo.svg' alt='David Stoker UX' />
      </a>

      <a href='https://www.linkedin.com/in/david-stoker-2305022' target='_blank'>
        <img src='/static/linkedin-logo.svg' alt='David Stoker UX' />
      </a>
    </Footer>
  )
}
