import styled from '@emotion/styled'
import React from 'react'
import { Box } from '@mui/material'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: #212936cc;
    border-radius: 20px;
    border: 1px solid #4D5562;
    opacity: 0.95;
    width: 500px;
    height: 300px;
    padding: 15px;
`

const BoxLanguages = styled(Box)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #394150;
    padding: 5px;
    gap: 15px;
    justify-content: flex-start;
    align-items: center;
`

const Languages = styled(Box)`
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #4D5562;
    font-family: 'DM Sans', sans-serif;
    font-weight: bold;
    font-size: 14px;
`

const BoxTranslate = () => {
    return (
        <Container>
            <BoxLanguages>
                <Languages>Detect Language</Languages>
                <Languages>English</Languages>
                <Languages>French</Languages>
                <Languages>Spanish</Languages>
            </BoxLanguages>

        </Container>
    )
}

export default BoxTranslate