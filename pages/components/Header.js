import { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import { HeaderStyle, Menu, MobileMenu, Hamburger } from '../../styles/components/header'
import { boxShadow, yellow } from '../../styles/tools/colors'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false
    }
  }

  render () {
    const { fixed, home, shadow, router } = this.props
    const path = router.pathname

    let style
    let caseStudiesStyle
    let contactStyle
    let myExperienceStyle
    let mobile = (
      <MobileMenu />
    )

    if (fixed && home) {
      style = {position: 'fixed'}
    } else if (fixed) {
      style = {position: 'fixed', boxShadow: `inset 0 -2px 8px -2px ${boxShadow}`}
    } else if (this.state.menuOpen) {
      style = {position: 'fixed'}
    } else if (shadow) {
      style = {boxShadow: `inset 0 -2px 8px -2px ${boxShadow}`}
    }

    if (path === '/contact') {
      contactStyle = {color: yellow}
    } else if (path === '/case-studies') {
      caseStudiesStyle = {color: yellow}
    } else if (path === '/my-experience') {
      myExperienceStyle = {color: yellow}
    }

    if (this.state.menuOpen) {
      mobile = (
        <MobileMenu open>
          <h2 onClick={this.toggleMenu.bind(this)}>&#x2715;</h2>
          <Link href='/case-studies'>
            <h3 style={caseStudiesStyle}>CASE STUDIES</h3>
          </Link>

          <Link prefetch href='/my-experience'>
            <h3 style={myExperienceStyle}>MY EXPERIENCE</h3>
          </Link>

          <Link prefetch href='/contact'>
            <h3 style={contactStyle}>CONTACT</h3>
          </Link>
        </MobileMenu>
      )
    }

    return (
      <HeaderStyle style={style}>
        <Link href='/'>
          <img
            src='/static/logo.svg'
            style={home ? {visibility: 'hidden'} : {}}
            alt='logo' />
        </Link>
        <Menu>
          <Link href='/case-studies'>
            <a style={caseStudiesStyle}>CASE STUDIES</a>
          </Link>

          <Link prefetch href='/my-experience'>
            <a style={myExperienceStyle}>MY EXPERIENCE</a>
          </Link>

          <Link prefetch href='/contact'>
            <a style={contactStyle}>CONTACT</a>
          </Link>
        </Menu>

        <Hamburger onClick={this.toggleMenu.bind(this)}>
          <span />
          <span />
          <span />
        </Hamburger>

        {mobile}

      </HeaderStyle>
    )
  }

  toggleMenu () {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
}

export default withRouter(Header)
