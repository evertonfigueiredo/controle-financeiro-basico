import React from 'react'
import * as C from './styles'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <C.Container>
        <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon/>
        </C.Header>
        <C.Total>{value?value:"0"}</C.Total>
    </C.Container>
  )
}

export default ResumeItem