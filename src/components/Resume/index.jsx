import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from "react-icons/fa"

const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" value={income} Icon={FaRegArrowAltCircleUp}/>
      <ResumeItem title="Saídas" value={expense} Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}

export default Resume