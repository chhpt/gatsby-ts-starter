import React from 'react'

/**
 * custom html content
 */
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
