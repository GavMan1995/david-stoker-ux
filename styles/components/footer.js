import styled from 'styled-components'

import { flexContainer } from '../tools/mixins'

export const Footer = styled.footer`
  ${flexContainer('flex-start', 'center', 'center')}
  width: 100%;
  padding: 40px 100px;
  background-color: #fff;

  > a {
    width: 18px;
    margin-right: 40px;

    > img {
      width: 100%;
      height: auto;
    }
  }

  &.contact {
    padding-left: 0;
  }

  @media (max-width: 880px) {
    justify-content: center;
    padding-bottom: 100px;
    
    > a {
      margin: 0 20px;
    }

    &.contact {
    padding-left: 100px;
  }
  }
`
