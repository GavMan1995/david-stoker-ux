import Link from 'next/link'
import styled from 'styled-components'

import { flexContainer, flexItem } from '../styles/tools/mixins'
import { gray, link } from '../styles/tools/colors'

export default ({ home, case1, case2, case3 }) => {
  console.log(home)
  let Header = styled.header`
    ${flexContainer('space-between', 'center')}
    width: 100%;
    padding: 30px 117px;
    background-color: ${gray};
    position: static;

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
    <Header>
      <Link href='/'>
        <img
          src='../static/ux-logo.svg'
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
