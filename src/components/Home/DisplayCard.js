import React from 'react'
import styled from 'styled-components'
import pix from "../Home/babe.jpeg"

 const DisplayCard = ({setDisplay}) => {
    //  const DisplayCard =({ setDisplay})=>{


  return (
    <Container
    onMouseEnter={()=>{
        setDisplay(true)
    }}
    onMouseLeave={()=>{
        setDisplay(false)
    }}
    >
        
        <Wrapper>
            <Top>
                <Image src={pix}/>
                <Holder>
                    <Name>name</Name>
                    <RealName>real name

                        <Follow>followed by <span>Another Name</span></Follow>
                    </RealName>
                </Holder>
            </Top>
            <Middle>
                <CountHolder>
                    <Count>{0}</Count>
                    {/* <Title>Post</Title> */}
                    <Follow>following</Follow>
                </CountHolder>

                <CountHolder>
                    <Count>{0}</Count>
                    <Title>Post</Title>
                    {/* <Follow>following</Follow> */}
                </CountHolder>

                <CountHolder>
                    <Count>{0}</Count>
                    {/* <Title>Post</Title> */}
                    <Follow>following</Follow>
                </CountHolder>
            </Middle>
            <Bottom>
                <Images src={pix}/>
                <Images src={pix}/>
                <Images src={pix}/>
            </Bottom>
            <Button>follow</Button>
        </Wrapper>
    </Container>
  )
}

export default DisplayCard
const Bottom= styled.div`
width: 10px;
display: flex;
`
const Button= styled.div`
background-color: blue;
height: 40px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 700;
color: white;


`
const Images = styled.img`
width: 116px;
height: 116px;
object-fit: cover;
:hover{
    opacity: 0.9;
}
`

const Middle= styled.div`
height: 50px;
border-top: 1px solid silver;
border-bottom: 1px solid silver;
padding: 10px 0;
display: flex;
align-items: center;
justify-content: space-around;
`
const CountHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-around; */
`
const Count = styled.div``
const Title = styled.div`
text-transform: capitalize;
`

const Container = styled.div`
    width:350px;
    /* height: ; */
    background-color: white;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-size: 12px;
    z-index:12;
`
const Wrapper = styled.div`
  padding-bottom: 10px;
`
const Top= styled.div`
display: flex;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 20px;
`
const Holder = styled.div``
const Name = styled.div``
const RealName = styled.div`
font-size: 13px;
margin-bottom: 15px;

`
const Follow = styled.div`

`
