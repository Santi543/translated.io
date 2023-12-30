import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import sound from '../imgs/sound_max_fill.svg'
import copy from '../imgs/Copy.svg'
import alfa from '../imgs/Sort_alfa.svg'
import down from '../imgs/Expand_down.svg'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: #212936cc;
    border-radius: 20px;
    border: 1px solid #4D5562;
    opacity: 0.97;
    width: 500px;
    height: 270px;
    padding: 15px 20px 15px 20px;
`

const BoxLanguages = styled(Box)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #394150;
    padding: 0 5px 12px 5px;
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
    font-weight: 500;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
`

const TextArea = styled.textarea`
    background-color: transparent;
    opacity: 0.97;
    border-style: none;
    resize: none;
    color: #F9FAFB;
    font-family: 'DM Sans', sans-serif;
    height: 150px;
    margin-top: 20px;
    outline: none;
`

const BoxIcons = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 8px;
`

const BoxIcon = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-radius: 10px;
    border: 2px solid #4D5562;
`

const Translate = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #3662E3;
    color: #F9FAFB;
    padding: 8px 20px 8px 20px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    border: 1px solid #7CA9F3;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
`

const BoxRowBottom = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CharactersCounter = styled(Box)`
    display: flex;
    justify-content: flex-end;
    color: #4D5562;
    font-size: 12px;
    font-weight: bold;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 10px;
`

const BoxTranslate = () => {
    const [counter, setCounter] = useState(19)
    const [language, setLanguage] = useState("English")
    const languagesArray = [{ lang: "Detect Language" }, { lang: "English" }, { lang: "French" }, { lang: "Spanish" }]
    const turnOn = (lang) => {
        setLanguage(lang)
    }
    return (
        <Container>
            <BoxLanguages>
                {languagesArray.map((obj) => {
                    return (
                        <Languages className={language === obj.lang ? 'on' : ''} onClick={() => turnOn(obj.lang)}>{obj.lang}</Languages>
                    )
                })}
            </BoxLanguages>
            <TextArea onChange={(e) => setCounter(e.target.value.length)} disabled={false} minLength={0} maxLength={500}>Hello, how are you?</TextArea>
                <CharactersCounter>{counter}/500</CharactersCounter>
            <BoxRowBottom>
                <BoxIcons>
                    <BoxIcon>
                        <img src={sound} />
                    </BoxIcon>
                    <BoxIcon>
                        <img src={copy} />
                    </BoxIcon>
                </BoxIcons>
                <Translate>
                    <img src={alfa} />Translate
                </Translate>
            </BoxRowBottom>
        </Container>
    )
}

export default BoxTranslate