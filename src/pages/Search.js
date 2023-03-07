import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from 'styled-components';

const Input = styled.input`
border: none;
outline: none;
border-bottom: 1px solid #333;
`
const Button = styled.button`
font-size: 23px;
background: transparent;
border: none;
outline: none;
`

const Search = () => {
    const [txt, SetText] = useState('');
    return (
        <>
            <Input type="text" onChange={(e) => SetText(e.target.value)} /> 
            <Button>
                <BsSearch />
            </Button>


            {/* <Input type="text" onChange={(e) => SetText(e.target.value)} /> 
            <Button>
                <BsSearch />
            </Button>
            <div>{txt}</div> */}
            {/* onChange의 이벤트 발생하면 이벤트 타겟의 벨류값을 SetText에 찍어라 */}
        </>
    )
}

export default Search;