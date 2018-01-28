import { Footer } from '../../styles/components/footer'

export default ({ contact }) => {
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
