import React from 'react'
// import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            keywords
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          work in progress 
        </div>
      </footer>
    )}
  />
)

export default Footer
