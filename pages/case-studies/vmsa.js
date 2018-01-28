import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { ImageContainer, Section, CaseStudySection } from '../../styles/base'

export default () => {
  return (
    <div>
      <Header vmsa />
      <div>
        <CaseStudySection vmsa>
          <h2>The Violin Making School of America</h2>
          <p>Even a place of learning can use some bells and whistles</p>
        </CaseStudySection>
      </div>
      <Footer />
    </div>
  )
}
