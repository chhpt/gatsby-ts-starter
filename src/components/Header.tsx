import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface Props {
  title: string
}

const StyledHeader = styled.header`
  background: #3279c7;
  margin-bottom: 1.5rem;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960;

  a {
    color: #fff;
  }
`
export const Header = ({ title = '' }: Props) => (
  <StyledHeader>
    <Content>
      <h1 className="text-2xl p-5">
        <Link to="/">{title}</Link>
      </h1>
    </Content>
  </StyledHeader>
)
