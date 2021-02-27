import React, { useState, useRef, useEffect } from 'react'
import useClickOutside from '../hooks/use-click-outside'

import {
  Header,
  HeaderDefault,
  Svg,
  ListItem,
  DropDownList,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer
} from './style'

const Select = (props) => {

  const options = props.options
  const [isOpen, setIsOpen] = useState(false)
  const [top, setTop] = useState()
  const [selectedOption, setSelectedOption] = useState(null)
  const ref = useRef()
  const clickRef = useRef()

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    if(props.onSelection) {
      props.onSelection(value)
    }
    setSelectedOption(value.label)
    setIsOpen(false)
  }

  const onClickOutside = () => {
    if(isOpen) setIsOpen(!isOpen)
  }

  useEffect(()=> {
    const top = ref.current.clientHeight
    setTop(top + 5)
  },[])

  useClickOutside(clickRef, onClickOutside)

  return (
    <>
          { !!(selectedOption)  && <Header> {props.label} </Header> }
      <DropDownContainer>
        <DropDownHeader ref={ref} onClick={toggling}>
          { selectedOption || <HeaderDefault> {props.label} </HeaderDefault> }
          <Svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path d="M7 10l5 5 5-5z"></path>
          </Svg>
        </DropDownHeader>
          <DropDownListContainer ref={clickRef} top={top} visible={isOpen} animationDuration={100}>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={`_dd_${option.label}`}>
                  {option.label}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
      </DropDownContainer>
      </>
  )
}
export default Select