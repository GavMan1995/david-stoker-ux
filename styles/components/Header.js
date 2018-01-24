import styled from 'styled-components'

import { flexContainer } from '../tools/mixins'
import { gray, link, yellow } from '../tools/colors'

export const Header = styled.header`
      ${flexContainer('space-between', 'center')}
      width: 100%;
      padding: 30px 117px;
      background-color: ${gray};
      top: 0;
      left: 0;
      z-index: 5;

      @media (max-width: 880px) {
        padding: 20px 30px;
      }

      > img {
        width: 160px;
        cursor: pointer;
        z-index: 110;
      }
    `

export const Menu = styled.div`
      @media (max-width: 880px) {
        display: none;
      }

      > a {
        margin-left: 24px;
        color: ${link};
      }
    `

export const MobileMenu = styled.div`
      ${flexContainer('center', 'center', 'center')}
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding: 40px 20px;
      z-index: 100;
      background-color: ${gray};
      transform: translateY(-100%); 
      opacity: 0;
      transition: opacity 0.2s ease-in, transform 0.2s ease-in;
      ${props => props.open ? 'opacity: 1;' : ''}
      ${props => props.open ? 'transform: translateY(0);' : ''}

      h3 {
        width: 100%;
        margin: 20px 0;
        color: ${link};
        font-weight: 100;
        text-align: center;
        cursor: pointer;
      }

      > h2 {
        position: absolute;
        top: 20px;
        right: 30px;
        color: ${yellow};
        cursor: pointer;
      }
    `

export const Hamburger = styled.div`
      width: 30px;
      height: 30px;
      padding: 5px 0;
      cursor: pointer;

      @media (min-width: 880px) {
        display: none;
      }
      
      > span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 25px;
        background-color: ${yellow};
        margin: 4px 0;
      }
    `

export const HeaderSpacer = styled.div`
  @media (max-width: 880px) {
    width: 100%;
    height: 40px;
    background-color: ${gray};
  }
`
