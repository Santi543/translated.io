import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import sound from '../imgs/sound_max_fill.svg'
import copy from '../imgs/Copy.svg'
import alfa from '../imgs/Sort_alfa.svg'
import down from '../imgs/Expand_down.svg'
import change from '../imgs/Horizontal_top_left_main.svg'
import data from '../data/translateApi'
import countries from '../data/countries'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid #4D5562;
    opacity: 0.9;
    width: 500px;
    height: 270px;
    padding: 15px 20px 15px 20px;
    background-color: ${props => props.output ? '#121826cc' : '#212936cc'};
`

const BoxLanguages = styled(Box)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #394150;
    padding: 0 5px 12px 5px;
    gap: 15px;
    justify-content: ${props => props.output ? 'space-between' : 'flex-start'};
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
    height: 42px;
`

const CharactersCounter = styled(Box)`
    display: flex;
    justify-content: flex-end;
    color: #4D5562;
    font-size: 12px;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 10px;
`

const SubBoxOutput = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 15px;
`



const BoxTranslate = ({ output = +false }) => {
    console.log(output)
    
    const [counter, setCounter] = useState(19)
    const [arrayOut, setArrayOut] = useState([])
    const [outLanguage, setOutLanguage] = useState("French")
    const [language, setLanguage] = useState("English")
    const languagesArray = [{ lang: "Detect Language" }, { lang: "English" }, { lang: "French" }, { lang: "Spanish" }]
    const outputArray = languagesArray.filter((obj) => obj.lang !== "Detect Language")
    const apiUrl = 'https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it'
    
    /* for (let index = 0; index < countries.length; index++) {
        console.log(countries)
        
    } */

    
    for (const [key, value] of Object.entries(countries)) {
        console.log(`${key}: ${value}`);
      }


    const turnOn = (lang) => {
        setLanguage(lang)
    }
    return (
        <Container output={output}>
            {output ?
                <BoxLanguages output={output}>
                        <SubBoxOutput>
                            {outputArray.map((obj) => {
                                return (
                                    <Languages className={language === obj.lang ? 'on' : ''} onClick={() => turnOn(obj.lang)}>{obj.lang}</Languages>
                                )
                            })}
                        </SubBoxOutput>
                        <Box>
                            <BoxIcon>
                                <img src={change} />
                            </BoxIcon>
                        </Box>
                </BoxLanguages>

                : <BoxLanguages>
                    {languagesArray.map((obj) => {
                        return (
                            <Languages className={language === obj.lang ? 'on' : ''} onClick={() => turnOn(obj.lang)}>{obj.lang}</Languages>
                        )
                    })}
                </BoxLanguages>}

            <TextArea readOnly={output ? true : false} defaultValue={"Hello, how are you?"} onChange={(e) => setCounter(e.target.value.length)} disabled={false} minLength={0} maxLength={500}></TextArea>
            {output ? false : <CharactersCounter>{counter}/500</CharactersCounter>}
            <BoxRowBottom>
                <BoxIcons>
                    <BoxIcon>
                        <img src={sound} />
                    </BoxIcon>
                    <BoxIcon>
                        <img src={copy} />
                    </BoxIcon>
                </BoxIcons>
                {output ? false : <Translate>
                    <img src={alfa} />Translate
                </Translate>}

            </BoxRowBottom>
        </Container>
    )
}

export default BoxTranslate