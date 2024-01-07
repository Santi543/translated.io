import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Input from './Input'
import Output from './Output'
import { useState } from 'react';
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
  const [langPairOut, setLangpairOut] = useState("fr-FR")
  const [text, setText] = useState("Hello, how are you?")
  const [langPairIn, setLangpairIn] = useState("en-GB")
  const [textOut, setTextOut] = useState("")
  const [language, setLanguage] = useState("English")
  const [languageSelect, setLanguageSelect] = useState("Spanish")
  const [displayInput, setDisplayInput] = useState(false)
  const [displayOutput, setDisplayOutput] = useState(false)
  const [languageSelectInput, setLanguageSelectInput] = useState("Spanish")

  const callingApi = () => {
    if (text.length === 0) {
      setTextOut("")
    } else {
      const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langPairIn}|${langPairOut}`
      fetch(apiUrl).then(res => res.json()).then(data => { setTextOut(data.responseData.translatedText) })
    }
  }

  const changePlaceLanguages = () => {
    if ((outLanguage !== "French" && outLanguage !== "English" && outLanguage !== "Spanish") && (language !== "Spanish" && language !== "French" && language !== "English" )) {
      setLanguageSelect(languageSelectInput)
      setLanguageSelectInput(languageSelect)
      setLanguage(outLanguage)
      setOutLanguage(language)
    } else if((outLanguage !== "French" && outLanguage !== "English" && outLanguage !== "Spanish") && (language === "Spanish" || language === "French" || language === "English" )){
      setLanguage(outLanguage)
      setLanguageSelectInput(outLanguage)
      setOutLanguage(language)
    } else if((outLanguage === "French" || outLanguage === "English" || outLanguage === "Spanish") && (language === "Spanish" || language === "French" || language === "English")){
      setOutLanguage(language);
      setLanguage(outLanguage);
    } else if((outLanguage === "French" || outLanguage === "English" || outLanguage === "Spanish") && (language !== "Spanish" && language !== "French" && language !== "English" )){
      setLanguageSelect(language)
      setOutLanguage(language)
      setLanguage(outLanguage)
    }
  }

  const filterLanguageOut = (language) => {
    for (const [key, value] of Object.entries(countries)) {
      if (language === value && language !== "French" && language !== "English") {
         setLangpairOut(key)
        setOutLanguage(language)
        setLanguageSelect(language)
        setDisplayOutput(false)
      } else if(language === value){
         setLangpairOut(key)
        setOutLanguage(language)
        setDisplayOutput(false)
      }
    }
  }

  const filterLanguageIn = (language) => {
    for (const [key, value] of Object.entries(countries)) {
      if (language === value && language !== "French" && language !== "English") {
        setLanguage(language)
        setLanguageSelectInput(language)
        setDisplayInput(false)
        setLangpairIn(key)
      } else if(language === value){
         setLangpairIn(key)
        setLanguage(language)
        setDisplayInput(false)
      }
    }
  }

  /* console.log("in", langPairIn)
  console.log("out", langPairOut)
  console.log(text) */
  console.log( "in",language)
  console.log("out",outLanguage)

  useEffect(() => {
    for (const [key, value] of Object.entries(countries)) {
      if (outLanguage === value) {
        setLangpairOut(key)
        setOutLanguage(outLanguage)
      }
    }
    callingApi()
  }, [])
  return (
    <Container>
      <Input langPairOut={langPairOut}
        text={text}
        setText={setText}
        langPairIn={langPairIn}
        setLangpairIn={setLangpairIn}
        callingApi={callingApi}
        language={language}
        setLanguage={setLanguage}
        filterLanguageIn={filterLanguageIn}
        languageSelectInput={languageSelectInput}
        display={displayInput}
        setDisplay={setDisplayInput}
      />
      <Output
        filterLanguageOut={filterLanguageOut}
        outLanguage={outLanguage}
        textOut={textOut}
        changePlaceLanguages={changePlaceLanguages}
        languageSelect={languageSelect}
        setLanguageSelect={setLanguageSelect}
        display={displayOutput}
        setDisplay={setDisplayOutput} />
    </Container>
  )
}

export default BoxContainer