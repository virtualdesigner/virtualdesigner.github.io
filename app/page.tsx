"use client";
import Content from './components/LandingPage/Content'
import { styled } from 'styled-components'

const LandingWrapper = styled.main(() => ({
  background: '#1c1c1c',
  minHeight: '100vh',
  paddingLeft: '10vw',
  paddingTop: '5vh'
}));

export default function Home() {
  return (
    <LandingWrapper>
      <Content />
    </LandingWrapper>
  )
}
