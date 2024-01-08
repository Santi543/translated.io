import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Input from './Input'
import Output from './Output'
import { useState } from 'react';
import countries from '../data/countries';
import { toast } from 'react-toast'

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
  const [languageDetected, setlanguageDetected] = useState("")
  const [showDetectedLanguage, setShowDetectedLanguage] = useState(false)

  const letsTalk = (text) => {
    let utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  const copyText = (text) => {
    var aux = document.createElement('input')
    aux.setAttribute('value', text)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
    toast("Copied to clipboard")
  }

  const callingApi = () => {
     if (text.length === 0) {
      setTextOut("")
    }
    if(language === outLanguage){
      setTextOut(text)
    }
    else if (language === "Detect Languages") {
      fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=Autodetect|${langPairOut}`)
        .then((res) => res.json())
        .then((res) => {
          for (const [key, value] of Object.entries(countries)) {
            if (res.responseData.detectedLanguage === key.slice(0,2)) {
              setlanguageDetected(value)
              setTextOut(res.responseData.translatedText)
            }
          }
        });
        setShowDetectedLanguage(true)
    } else {
      const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langPairIn}|${langPairOut}`
      fetch(apiUrl).then(res => res.json()).then(data => { setTextOut(data.responseData.translatedText) })
    }
  }

  console.log(language)
  console.log(languageDetected)
  const changePlaceLanguages = () => {
     if ((outLanguage !== "French" && outLanguage !== "English" && outLanguage !== "Spanish") && (language !== "Spanish" && language !== "French" && language !== "English")) {
      setLanguageSelect(languageSelectInput)
      setLanguageSelectInput(languageSelect)
      setLanguage(outLanguage)
      setOutLanguage(language)
      setLangpairIn(langPairOut)
      setLangpairOut(langPairIn)
    } else if ((outLanguage !== "French" && outLanguage !== "English" && outLanguage !== "Spanish") && (language === "Spanish" || language === "French" || language === "English")) {
      setLanguage(outLanguage)
      setLanguageSelectInput(outLanguage)
      setOutLanguage(language)
      setLangpairIn(langPairOut)
      setLangpairOut(langPairIn)
    } else if ((outLanguage === "French" || outLanguage === "English" || outLanguage === "Spanish") && (language === "Spanish" || language === "French" || language === "English")) {
      setOutLanguage(language);
      setLanguage(outLanguage);
      setLangpairIn(langPairOut)
      setLangpairOut(langPairIn)
    } else if ((outLanguage === "French" || outLanguage === "English" || outLanguage === "Spanish") && (language !== "Spanish" && language !== "French" && language !== "English")) {
      setLanguageSelect(language)
      setOutLanguage(language)
      setLanguage(outLanguage)
      setLangpairIn(langPairOut)
      setLangpairOut(langPairIn)
    }
  }

  const filterLanguageOut = (language) => {
    for (const [key, value] of Object.entries(countries)) {
      if (language === value && language !== "French" && language !== "English") {
        setLangpairOut(key)
        setOutLanguage(language)
        setLanguageSelect(language)
        setDisplayOutput(false)
      } else if (language === value) {
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
      } else if (language === value) {
        setLangpairIn(key)
        setLanguage(language)
        setDisplayInput(false)
      }
    }
  }

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
        copyText={copyText}
        letsTalk={letsTalk}
        languageDetected={languageDetected}
        showDetectedLanguage={showDetectedLanguage}
      />
      <Output
        filterLanguageOut={filterLanguageOut}
        outLanguage={outLanguage}
        textOut={textOut}
        changePlaceLanguages={changePlaceLanguages}
        languageSelect={languageSelect}
        setLanguageSelect={setLanguageSelect}
        display={displayOutput}
        setDisplay={setDisplayOutput}
        copyText={copyText}
        letsTalk={letsTalk}
      />
    </Container>
  )
}

export default BoxContainer