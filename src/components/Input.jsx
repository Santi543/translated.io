import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import sound from '../imgs/sound_max_fill.svg'
import copy from '../imgs/Copy.svg'
import alfa from '../imgs/Sort_alfa.svg'
import down from '../imgs/Expand_down.svg'
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
    background-color:#212936cc;
`

const BoxLanguages = styled(Box)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #394150;
    padding: 0 5px 12px 5px;
    gap: 15px;
    justify-content: 'flex-start';
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

const BoxSelectLanguages = styled(Box)`
    display: flex;
    display: ${props => props.hide ? "none" : "flex"};
    flex-direction: column;
    overflow-y: scroll;
    height: 100px;
    position: absolute;
    z-index: 100;
    left: -4px;
    bottom: 54px;
    background-color: #121826cc;
    color: #4D5562;
    width: 100px;
    gap: 3px;
    padding-top: 10px;
    border-radius: 10px;
    border: 1px solid #4D5562;
    &::-webkit-scrollbar{
        width: 7px;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: #4D5562;
        border-radius: 5px;
    }
    
`

const CountriesLang = styled(Typography)`
    &:hover{
        background-color: #F9FAFB;
        color: #040711;
        cursor: pointer;
    }
`

const Input = ({ text, setText, callingApi, language, filterLanguageIn, languageSelectInput, display , setDisplay}) => {
  const [counter, setCounter] = useState(19)

  const onChangeText = (evt) => {
    setCounter(evt.target.value.length)
    setText(evt.target.value)
  }

  return (
    <Container >
      <BoxLanguages>
        <Languages className={language === 'Detect Languages' ? 'on' : ''} onClick={() => filterLanguageIn('Detect Languages')}>Detect Languages</Languages>
        <Languages className={language === 'English' ? 'on' : ''} onClick={() => filterLanguageIn('English')}>English</Languages>
        <Languages className={language === 'French' ? 'on' : ''} onClick={() => filterLanguageIn('French')}>French</Languages>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
          <Languages className={language === languageSelectInput ? 'on' : ''} onClick={() => filterLanguageIn(languageSelectInput)}>{languageSelectInput}</Languages>
          <img src={down} style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)} />
          <BoxSelectLanguages hide={!display}>
            {display ? Object.values(countries).map((obj) => {
              return (
                <CountriesLang onClick={(evt) => {filterLanguageIn(evt.target.innerHTML)}}>{obj}</CountriesLang>
              )

            })
              : false}
          </BoxSelectLanguages>
        </Box>
      </BoxLanguages>
      <TextArea defaultValue={text} onChange={(evt) => onChangeText(evt)} disabled={false} minLength={0} maxLength={500}></TextArea>
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
        <Translate onClick={() =>  {callingApi()} }>
          <img src={alfa} />Translate
        </Translate>
      </BoxRowBottom>
    </Container>
  )
}

export default Input