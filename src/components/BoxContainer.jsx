import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import BoxTranslate from './BoxTranslate'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const BoxContainer = () => {
  return (
    <Container>
        <BoxTranslate/>
        <BoxTranslate output={true}/>
    </Container>
  )
}

export default BoxContainer