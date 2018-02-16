import styled, { css } from 'styled-components'

import { gray, darkGray, gold, yellow } from '../tools/colors'
import { flexContainer, flexItem } from '../tools/mixins'

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 160px 0;
  background-color: #fff;

  @media (max-width: 880px) {
    margin-bottom: 60px;
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
      height: 175px;
      background-color: ${gray};
      border-radius: 50%;
    }

    > small {
      position: absolute;
      right: calc(50% - 220px);
      bottom: 20px;
      font-family: "museo-slab", sans-seif;
      font-weight: 100;
      font-size: 12px;
      text-align: center;
      line-height: 1;
      font-style: italic;
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
  padding: 80px calc(50% - 650px);
  ${props => props.bottom ? 'padding: 0 calc(50% - 700px);' : ''}
  position: relative;

  ${props => props.bottom && css`
    ${flexContainer('center')};
    padding-top: 100px;
    z-index: 3;

    div {
      height: inherit;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
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

      > small {
        font-size: 10px;
        width: 100%;
        text-align: center;
        padding-bottom: 10px;
        line-height: 0.5;
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

  > p, i {
    width: 100%;
    padding-bottom: 20px;
    font-family: "museo-slab", sans-serif;
    font-weight: 500;
    line-height: 26px;
    font-size: 15px;

    &:last-child, :nth-child(4) {
      padding-bottom: 0;
    }
  }

  > h3 {
    width: 100%;
    font-family: "museo-slab", sans-serif;
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    letter-spacing: 0;
  }

  > .top-img {
    position: absolute;
    top: -160px;
    left: calc(50% - 62.5px);
    width: 125px;
    height: 125px;
    background-color: ${gray};
    border-radius: 50%;
  }

  > .side-img {
    position: absolute;
    bottom: 20px;
    left: -120px;
    width: 83px;
    height: 83px;
    background-color: ${gray};
    border-radius: 50%;
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
      font-size: 15px;
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
      margin-bottom: 20px;
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
    color: ${gold};
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1.25px;
  }

  .black {
    color: #000;
    width: 100%;
  }

  @media (max-width: 880px) {
    position: static;
    padding: 20px 0 30px 0;

    > p {
      margin: 10px 0;
    }
  }
`
