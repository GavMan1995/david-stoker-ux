import styled from 'styled-components'

import { darkGray } from '../tools/colors'
import { flexContainer, flexItem } from '../tools/mixins'

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
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
  padding: 40px calc(50% - 600px);
`
export const TimeLineAside = styled.aside`
  ${flexItem('200px')};
  margin: 0 120px;
  position: relative;

  > p {
    padding-bottom: 20px;
  }

  > .top-img {
    position: absolute;
    top: -160px;
    left: calc(50% - 62.5px)
  }
`
export const AsidePlaceholder = styled.aside`
  ${flexItem('200px')}
  margin: 0 120px;
`
