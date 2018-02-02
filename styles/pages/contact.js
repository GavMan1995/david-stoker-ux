import styled from 'styled-components'
import { yellow } from '../tools/colors'

export const Contact = styled.div`
  width: 100%;
  margin: 200px calc(50% - 612px) 40px;
  padding: 0 30px;

  > h3 {
    max-width: 600px;
    line-height: 38px;
    font-family: "museo-slab", sans-serif;
    font-size: 20px;
  }

  > .contact-links {
    width: 100%;
    padding: 40px 0;

    .yellow {
      color: ${yellow};
    }

    h2 {
      width: 100%;
      padding-top: 10px;
      font-weight: 500;
    }
  }

  @media (max-width: 1264px) {
    margin: 40px 0;
  }
`
