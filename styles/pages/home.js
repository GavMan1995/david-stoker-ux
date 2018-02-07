import styled from 'styled-components'

import { flexContainer, flexItem } from '../tools/mixins'
import { gray, gold } from '../tools/colors'

export const Hero = styled.section`
  ${flexContainer('flex-start', 'center')}
  width: 100$;
  background-color: ${gray};
  margin-top: 78px;
  padding: 160px calc(50% - 612px);

  @media(max-width: 800px) {
    padding: 80px 24px;
    margin-top: 68px;
  }
`

export const HeroAside = styled.aside`
  ${flexContainer('center', 'center')}
  ${flexItem('400px')}
  width: 100%;

  > img {
    width: 300px;
  }

  > h2 {
    max-width: 500px;
    color: ${gold};
    letter-spacing: 0.5;
    font-weight: 300;
    line-height: 34px;
    font-family: "museo-sans", sans-serif;
  }

  @media(max-width: 800px) {
    > h2 {
      text-align: center;
    }

    > img {
      margin-bottom: 80px;
    }
  }
`
