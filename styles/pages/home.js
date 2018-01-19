import styled from 'styled-components'

import { flexContainer, flexItem } from '../tools/mixins'
import { gray, gold } from '../tools/colors'

export const Hero = styled.section`
  ${flexContainer('flex-start', 'center')}
  width: 100$;
  background-color: ${gray};
  padding: 80px calc(50% - 612px);

  @media(max-width: 800px) {
    padding: 80px 24px;
  }
`

export const HeroAside = styled.aside`
  ${flexContainer('center', 'center')}
  ${flexItem('400px')}
  width: 100%;

  > h2 {
    max-width: 460px;
    color: ${gold}
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
