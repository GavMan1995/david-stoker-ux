import styled, { css } from 'styled-components'

import { gray, darkGray, yellow } from '../tools/colors'
import { flexContainer, flexItem } from '../tools/mixins'

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 160px 0;
  background-color: #fff;

  @media (max-width: 880px) {
    margin-bottom: 60px
  }

  &:after {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid ${darkGray};
    content: '';
  }

  > .img-container {
    ${flexContainer('center')}
    position: relative;
    width: 100%;
    margin-bottom: 120px;
    z-index: 2;

    > img {
      width: 175px;
      height: auto;
      border: 1px solid #A0A1A0;
      border-radius: 50%;
    }

    > small {
      position: absolute;
      right: calc(50% - 220px);
      bottom: 20px;
    }

    @media (max-width: 880px) {
      margin-bottom: 10px;
      
      > small {
        display: none;
      }
    }
  }
`

export const TimeLineSection = styled.section`
  ${flexContainer()}
  ${props => props.bottom ? 'padding: 0 calc(50% - 612px);' : 'padding: 80px calc(50% - 612px);'}
  position: relative;
  
  ${props => props.bottom && css`
    ${flexContainer('center')};
    padding-top: 80px;
    z-index: 3;

    > p {
      width: 100%;
      margin-bottom: 40px;
      padding: 4px;
      text-align: center;
      background-color: #fff;
      font-weight: 400;
    }

    > .to-top {
      ${flexContainer('center', 'center', 'center')};
      display: none;
      position: absolute;
      bottom: -40px;
      right: 40px;
      width: 45px;
      height: 45px;
      padding: 5px;
      background-color: ${gray};
      border-radius: 50%;
      box-shadow: 2px 2px 4px ${darkGray};
      cursor: pointer;

      @media (max-width: 880px) {
        display: flex;
      }

      > p, small {
        width: 100%;
        text-align: center;
        line-height: 1;
      }
    }
  `}

  @media (max-width: 880px) {
    ${props => props.bottom ? 'padding: 60px 20px 0;' : 'padding: 10px 20px;'}
  }
`

export const TimeLineAside = styled.aside`
  ${flexItem('250px')};
  margin: 0 80px;
  ${props => props.rightAside ? 'margin-left: 100px;' : 'margin-right: 100px;'}
  position: relative;
  background-color: #fff;
  z-index: 3;

  > p {
    width: 100%;
    padding-bottom: 20px;

    &:last-child, :nth-child(4) {
      padding-bottom: 0;
    }
  }

  > h3 {
    width: 100%;
  }

  > .top-img {
    position: absolute;
    top: -160px;
    left: calc(50% - 62.5px)
  }

  > .side-img {
    position: absolute;
    bottom: 20px;
    left: -120px;
  }

  > .bottom-note {
    position: absolute;
    top: calc(100% + 40px);
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: ${gray};
    color: ${darkGray};
    text-align: center;

    > p {
      padding-bottom: 10px;
      line-height: 1.6;
      font-weight: 400;
    }

    > small {
      color: ${yellow};
      cursor: pointer;
      font-size: 14px;

      > img {
        margin-right: 10px;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -10%;
    ${props => props.rightAside ? 'left: -30px;' : 'right: -20px;'}
    width: 20px;
    height: 120%;
    background-color: ${yellow};
    ${props => props.rightAside ? 'border-radius: 10px 0 0 10px;' : 'border-radius: 0 10px 10px 0;'}
  }

  &:after {
    content: '';
    position: absolute;
    top: calc(-10% + 2px);
    ${props => props.rightAside ? 'left: -28px;' : 'right: -18px;'}
    width: 20px;
    height: calc(120% - 4px);
    background-color: #fff;
    ${props => props.rightAside ? 'border-radius: 8px 0 0 8px;' : 'border-radius: 0 8px 8px 0;'}
  }

  @media (max-width: 880px) {
    ${flexContainer('center')}
    margin: 0 20px;

    &:after, :before {
      display: none;
    }

    > .bottom-note {
      position: static;
      margin-top: 20px;
    }

    > .side-img, .top-img {
      position: static;
      padding-bottom: 20px;
    }
  }
`

export const AsidePlaceholder = styled.aside`
  ${flexItem('250px')}
  margin: 0 100px;
`

export const MiddleText = styled.div`
  ${flexContainer('space-around', 'center', 'center', 'wrap', 'column')}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  z-index: 2;
  text-align: center;

  > p {
    width: 160px;
    padding: 4px;
    background-color: #fff;
    color: ${yellow};
    font-weight: 400;
  }

  @media (max-width: 880px) {
    position: static;
    padding: 20px 0 30px 0;

    > p {
      margin: 10px 0;
      font-weight: 600;
    }
  }
`
