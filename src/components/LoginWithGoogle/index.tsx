import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Container } from './styles'


export function LoginWithGoogle({onClick}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Container>
      <span><FaGoogle/></span> Sign in with Google
    </Container>
  )
}