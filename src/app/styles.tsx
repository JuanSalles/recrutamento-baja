'use client'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  width: 100%;
  padding-top: ${(props) => props.theme.spacings.xxlarge};
`

export const ContainerVagas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.theme.grid.container};
  padding: ${(props) => props.theme.spacings.medium};
`
