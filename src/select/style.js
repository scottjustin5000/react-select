import styled from 'styled-components'

const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
  width: 100%;
  position: relative;
`
//box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
//  margin-bottom: 1.8em;
//  font-size: .8rem;
const DropDownHeader =styled.div`
  min-height: 1.1875em;
  font-weight: 500;
  color: ${props => props.color || '#000'};
  padding: 6px 0 7px;
  padding-left: .5em;
  border-bottom: 1px solid ${props => props.color || '#000'};
  cursor: pointer;
`

const HeaderDefault = styled.span`
  color: #808080;
  font-style: italic;
`

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  margin-top: -${props => props.top}px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  z-index: 100;
  cursor: default;
  transition: ${props => props.animationDuration}ms;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0.9)'};
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 0px;
  background: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  color: ${props => props.color || '#000'};
  font-size: 1.1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding-left: 1em;
  margin-bottom: 0.8em;
  padding-bottom: 8px;
  padding-top: 8px;
  &:hover {
    background-color:#efefef;
  }
`
const Svg = styled.svg`
  top: calc(50% - 12px);
  right: 0;
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  pointer-events: none;
  fill: #000;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
`

const Header = styled.label`
    color: #808080;
    padding: 0;
    font-size: .9rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
    padding-left: .5em;
`

export {
  Header,
  HeaderDefault,
  Svg,
  ListItem,
  DropDownList,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer
}