import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import sound from '../imgs/sound_max_fill.svg'
import copy from '../imgs/Copy.svg'
import down from '../imgs/Expand_down.svg'
import change from '../imgs/Horizontal_top_left_main.svg'
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
    background-color: #121826cc;
`

const BoxLanguages = styled(Box)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #394150;
    padding: 0 5px 12px 5px;
    gap: 15px;
    justify-content: space-between;
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

const BoxRowBottom = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 42px;
`

const SubBoxOutput = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 15px;
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

const Output = ({outLanguage, filterLanguageOut, textOut}) => {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState("Hello, how are you?")
    /* const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langPairIn}|${langPairOut}` */

    const onChangeText = (evt) => {
        setText(evt.target.value)
    }

    return (
        <Container>
                <BoxLanguages>
                    <SubBoxOutput>
                        <Languages className={outLanguage === 'English' ? 'on' : ''} onClick={() => filterLanguageOut('English')}>English</Languages>
                        <Languages className={outLanguage === 'French' ? 'on' : ''} onClick={() => filterLanguageOut('French')}>French</Languages>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <Languages className={outLanguage === 'Spanish' ? 'on' : ''} onClick={() => filterLanguageOut('Spanish')}>Spanish</Languages>
                            <img src={down} style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)} />
                            <BoxSelectLanguages hide={!display}>
                                {display ? Object.values(countries).map((obj) => {
                                    return (
                                        <CountriesLang onClick={(evt) => filterLanguageOut(evt.target.innerHTML)}>{obj}</CountriesLang>
                                    )

                                })
                                    : false}
                            </BoxSelectLanguages>
                        </Box>

                    </SubBoxOutput>
                    <Box>
                        <BoxIcon>
                            <img src={change} />
                        </BoxIcon>
                    </Box>
                </BoxLanguages>

            <TextArea readOnly={true} value={textOut} onChange={(evt) => onChangeText(evt)} disabled={false} minLength={0} maxLength={500}></TextArea>

            <BoxRowBottom>
                <BoxIcons>
                    <BoxIcon>
                        <img src={sound} />
                    </BoxIcon>
                    <BoxIcon>
                        <img src={copy} />
                    </BoxIcon>
                </BoxIcons>
            </BoxRowBottom>
        </Container>
    )
}

export default Output