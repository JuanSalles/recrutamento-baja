import styled from 'styled-components'
import { Props } from '.'

export const SubTitle = styled.p<Props>`
  font-family: ${props => props.theme.font.family};
  font-weight: 400;
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.font.sizes.medium};
  color: ${props => props.theme.colors.white};
`