import Link from 'next/link'
import styled from 'styled-components'

import { flexContainer } from '../styles/tools/mixins'
import { gray, link } from '../styles/tools/colors'

export default ({ home, fixed }) => {
  const Header = styled.header`
    ${flexContainer('space-between', 'center')}
    width: 100%;
    padding: 30px 117px;
    background-color: ${gray};
    top: 0;
    left: 0;
    z-index: 5;

    > img {
      width: 160px;
      cursor: pointer;
    }
  `

  const Menu = styled.div`
    > a {
      margin-left: 24px;
      color: ${link};
    }
  `

  return (
    <Header style={fixed ? {position: 'fixed'} : {}}>
      <Link href='/'>
        <img
          src='/static/ux-logo.svg'
          style={home ? {visibility: 'hidden'} : {}}
          alt='logo' />
      </Link>
      <Menu>
        <Link href='/case-studies'>
          CASE STUDIES
        </Link>

        <Link prefetch href='/my-experience'>
          MY EXPERIENCE
        </Link>

        <Link prefetch href='/contact'>
          CONTACT
        </Link>
      </Menu>
    </Header>
  )
}
