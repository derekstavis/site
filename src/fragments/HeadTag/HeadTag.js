import React from 'react'
import Helmet from 'react-helmet'
import Sentry from '../GlobalScripts/Sentry'
/*
script={[
  {'src': 'https://cdn.auth0.com/js/lock/10.4/lock.min.js', 'type': 'text/javascript'},
]}
 */

export default class HeadTag extends React.Component {
  render () {
    return (
      <div>
        <style>
          {'@-ms-viewport { width: device-width; }'}
        </style>
        <Helmet
          meta={[
            { property: 'og:site_name', content: process.env.SITENAME },
            { name: 'twitter:site', content: `@${process.env.TWITTER}` },
            {
              name: 'google-site-verification',
              content: '1HdFnJaYYEiONgCRl3fj7lQobYY4uXPe5L2-sTgNzKQ'
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}
          script={[
            {
              src: 'https://cdn.ravenjs.com/3.7.0/raven.min.js',
              type: 'text/javascript',
              crossorigin: 'anonymous'
            },
            {
              type: 'text/javascript',
              innerHTML: `${Sentry}`
            }
          ]}
        />
      </div>
    )
  }
}
