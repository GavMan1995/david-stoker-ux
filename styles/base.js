import styled, { css } from 'styled-components'

import { flexContainer } from './tools/mixins'
import { yellow, darkGray } from './tools/colors'

export const CaseStudySection = styled.section`
  ${flexContainer('center', 'center', 'center')}
  position: relative;
  width: 100%;
  height: 355px;
  padding: 40px 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    > .case-study-tab {
      text-decoration: underline;
    }
  }

  > h2, p {
    width: 100%;
    text-align: center;
  }

  > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-shadow: 0 -8px 16px -8px #000;
    ${props => props.firstSection ? `box-shadow: 0px -8px 16px -8px ${darkGray};` : 'box-shadow: 0px -8px 16px -8px #000;'}
    z-index: 1;
  }

  > .case-study-tab {
    ${flexContainer('center', 'flex-end', 'flex-end')}
    position: absolute;
    top: -34px;
    left: 0;
    width: 124px;
    height: 34px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    z-index: 2;
    color: ${yellow};
    font-size: 12px;
    font-family: "museo-sans", sans-serif;
    ${props => props.firstSection ? `box-shadow: 4px -4px 8px -4px ${darkGray};` : 'box-shadow: 4px -4px 8px -4px #000;'}
  }

  ${props => props.vmsa && css`
    background: url('/static/case-studies/vmsa.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 30%;

      @media(max-width: 800px) {
        left: 20%;
      }
    }
  `}

  ${props => props.movie && css`
    background: url('/static/case-studies/moviepass.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 40%;

      @media(max-width: 800px) {
        left: 20%;
      }      
    }
  `}

  ${props => props.homework && css`
    background: url('/static/case-studies/homework.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 50%;

      @media(max-width: 800px) {
        left: 20%;
      }
    }
  `}
`

export const Button = styled.button`
  padding: 15px 30px;
  background-color: ${yellow};
  color: #fff;
  border: none;
  outline: 0;
  border-radius: 25px;
  box-shadow: 2px 2px 8px ${darkGray};
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 4px 4px 12px ${darkGray};
    transform: scale(1.02);
  }
`
