import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { Layout } from '@/layout'
import { Seo } from '@/components'

const FeatureSection = styled.section`
  display: grid;
  grid-gap: 10px;
  margin: 40px 0px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="p-5">
        <h2>Hello world!</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <FeatureSection>
          <div>
            <h3>Gatsby </h3>
            <StaticImage src="../images/gatsby.png" alt="emotion" width={200} />
          </div>
          <div>
            <h3>Tailwind CSS </h3>
            <StaticImage src="../images/tailwindcss.png" alt="emotion" width={200} />
          </div>
          <div>
            <h3>Styles via Emotion</h3>
            <StaticImage src="../images/emotion-logo.png" alt="emotion" width={200} />
          </div>
          <div>
            <h3>Typescript by default</h3>
            <StaticImage src="../images/typescript-logo.svg" alt="typescript" width={200} />
          </div>
        </FeatureSection>
      </div>
    </Layout>
  )
}

export default IndexPage
