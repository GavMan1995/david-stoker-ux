import styled, { css } from 'styled-components'

import { flexContainer, flexItem } from '../tools/mixins'
import { gray, gold, yellow, darkGray } from '../tools/colors'

export const Hero = styled.section`
  ${flexContainer('flex-start', 'center')}
  width: 100$;
  background-color: ${gray};
  padding: 80px calc(50% - 612px);
`

export const HeroAside = styled.aside`
  ${flexContainer('center', 'center')}
  ${flexItem('400px')}
  width: 100%;

  > h2 {
    max-width: 460px;
    color: ${gold}
  }
`

export const CaseStudySection = styled.section`
  ${flexContainer('center', 'center', 'center')}
  position: relative;
  width: 100%;
  height: 355px;
  padding-top: 40px;
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
    box-shadow: 0 -4px 20px -8px #000;
    z-index: 1;
  }

  > .case-study-tab {
    ${flexContainer('center', 'flex-end', 'flex-end')}
    position: absolute;
    top: -34px;
    left: 0;
    width: 138px;
    height: 34px;
    background-color: #fff;
    border-radius: 24px 24px 0 0;
    z-index: 2;
    color: ${yellow};
    font-size: 12px;
    font-family: "museo-sans", sans-serif;
    box-shadow: 4px -2px 16px -10px #000;
  }

  ${props => props.vmsa && css`
    background: url('/static/vmsa.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 30%;
    }
  `}

  ${props => props.movie && css`
    background: url('/static/moviepass.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 40%;
    }
  `}

  ${props => props.homework && css`
    background: url('/static/homework.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 50%;
    }
  `}
`
