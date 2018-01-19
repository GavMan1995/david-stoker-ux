import styled from 'styled-components'

import { darkGray, yellow } from '../tools/colors'
import { flexContainer, flexItem } from '../tools/mixins'

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 160px;
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
  padding: 80px calc(50% - 612px);
  position: relative;
`
export const TimeLineAside = styled.aside`
  ${flexItem('200px')};
  margin: 0 80px;
  ${props => props.rightAside ? 'margin-left: 160px;' : 'margin-right: 160px;'}
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
    bottom: 0;
    left: - 40px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -10%;
    ${props => props.rightAside ? 'left: -40px;' : 'right: -30px;'}
    width: 20px;
    height: 120%;
    background-color: ${yellow};
    ${props => props.rightAside ? 'border-radius: 10px 0 0 10px;' : 'border-radius: 0 10px 10px 0;'}
  }

  :after {
    content: '';
    position: absolute;
    top: calc(-10% + 2px);
    ${props => props.rightAside ? 'left: -38px;' : 'right: -28px;'}
    width: 20px;
    height: calc(120% - 4px);
    background-color: #fff;
    ${props => props.rightAside ? 'border-radius: 8px 0 0 8px;' : 'border-radius: 0 8px 8px 0;'}
  }
`
export const AsidePlaceholder = styled.aside`
  ${flexItem('200px')}
  margin: 0 160px;
`

export const MiddleText = styled.div`
  ${flexContainer('flex-start', 'center', 'space-around')}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  z-index: 2;
  text-align: center;

  > p {
    width: 100%;
    padding: 4px;
    background-color: #fff;
    color: ${yellow};
  }
`
