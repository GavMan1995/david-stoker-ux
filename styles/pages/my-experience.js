import styled, { css } from 'styled-components'

import { gray, darkGray, yellow } from '../tools/colors'
import { flexContainer, flexItem } from '../tools/mixins'

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 160px 0;
  background-color: #fff;

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
    }
  `}
`
export const TimeLineAside = styled.aside`
  ${flexItem('200px')};
  margin: 0 80px;
  ${props => props.rightAside ? 'margin-left: 100px;' : 'margin-right: 100px;'}
  position: relative;
  z-index: 3;

  > p {
    padding-bottom: 20px;
    &:last-child {
      padding-bottom: 0;
    }
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
      color: ${yellow};
      padding-top: 20px;
      font-size: 14px;
      cursor: pointer;

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

  :after {
    content: '';
    position: absolute;
    top: calc(-10% + 2px);
    ${props => props.rightAside ? 'left: -28px;' : 'right: -18px;'}
    width: 20px;
    height: calc(120% - 4px);
    background-color: #fff;
    ${props => props.rightAside ? 'border-radius: 8px 0 0 8px;' : 'border-radius: 0 8px 8px 0;'}
  }
`
export const AsidePlaceholder = styled.aside`
  ${flexItem('200px')}
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
  }
`
