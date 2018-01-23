import { Component } from 'react'
import Link from 'next/link'

import { Header, Menu, MobileMenu, Hamburger } from '../styles/components/Header'

export default class extends Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false
    }
  }

  render () {
    const { fixed, home } = this.props
    let mobile = (
      <MobileMenu />
    )

    if (this.state.menuOpen) {
      mobile = (
        <MobileMenu open>
          <h2 onClick={this.toggleMenu.bind(this)}>&#x2715;</h2>
          <a href='/case-studies'>
            <h3>CASE STUDIES</h3>
          </a><a href='/my-experience'>
            <h3>MY EXPERIENCE</h3>
          </a><a href='/contact'>
            <h3>CONTACT</h3>
          </a>
        </MobileMenu>
      )
    }

    return (
      <Header style={fixed ? {position: 'fixed'} : {}}>
        <Link href='/'>
          <img
            src='/static/ux-logo.svg'
            style={home ? {visibility: 'hidden'} : {}}
            alt='logo' />
        </Link>
        <Menu>
          <Link href='/case-studies'>
          CASE STUDIES
        </Link>

          <Link prefetch href='/my-experience'>
          MY EXPERIENCE
        </Link>

          <Link prefetch href='/contact'>
          CONTACT
        </Link>
        </Menu>

        <Hamburger onClick={this.toggleMenu.bind(this)}>
          <span />
          <span />
          <span />
        </Hamburger>

        {mobile}

      </Header>
    )
  }

  toggleMenu () {
    this.setState({ menuOpen: !this.state.menuOpen })

    if (this.state.menuOpen === false) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = '100%'
      document.body.style.overflow = 'initial'
    }
  }
}
