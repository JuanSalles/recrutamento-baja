'use client'
import Titulo from '@/components/Titulo'
import * as S from './styles'
import { useEffect, useState } from 'react'
import Vaga from '@/components/Vaga'
import Footer from '@/components/Footer'
import SubTitulo from '@/components/SubTitulo'

export default function Home() {
  const [vagas, setVagas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await fetch('api/vagas')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setVagas(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchVagas()
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error loading vagas</div>
  }
  if (!vagas || vagas.length === 0) {
    return <div>Sem vagas disponivéis no momento!</div>
  }
  return (
    <S.Main>
      <Titulo size="large" color="primary">
        ESTAMOS RECRUTANDO
      </Titulo>
      <SubTitulo>
        O Comitê Técnico Baja SAE BRASIL está buscando voluntários para posições
        dos subcomitês:
      </SubTitulo>
      <S.ContainerVagas>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading vagas</p>}
        {vagas.map((vaga, index) => (
          <Vaga key={index} data={vaga} isFirst={index === 0} />
        ))}
      </S.ContainerVagas>
      <Footer>© 2025 Baja SAE BRASIL. Todos os direitos reservados.</Footer>
    </S.Main>
  )
}
