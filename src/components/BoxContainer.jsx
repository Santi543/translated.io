import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Input from './Input'
import Output from './Output'
import {useState} from 'react';
import countries from '../data/countries';

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const BoxContainer = () => {
  const [outLanguage, setOutLanguage] = useState("French")
  const [langPairOut, setLangpairOut] = useState("")
  const [text, setText] = useState("Hello, how are you?")
  const [langPairIn, setLangpairIn] = useState("")
  const [textOut, setTextOut] = useState("")

  const callingApi = () =>{
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langPairIn}|${langPairOut}`
    fetch(apiUrl).then(res => res.json()).then(data => {setTextOut(data.responseData.translatedText)})
  }

  const filterLanguageOut = (language) => {
    for (const [key, value] of Object.entries(countries)) {
        if (language === value) {
            setLangpairOut(key)
            setOutLanguage(language)
        }
    }
}

useEffect(() =>{
  filterLanguageOut(outLanguage)
  
}, [])
  return (
    <Container>
        <Input langPairOut={langPairOut} text={text} setText={setText} langPairIn={langPairIn} setLangpairIn={setLangpairIn} callingApi={callingApi}/>
        <Output filterLanguageOut={filterLanguageOut} outLanguage={outLanguage} textOut={textOut}/>
    </Container>
  )
}

export default BoxContainer