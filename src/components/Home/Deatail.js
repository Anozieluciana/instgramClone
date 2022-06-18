import React,{useState} from 'react'
import styled from 'styled-components'
import pix from "../Home/babe.jpeg"
import {FiSettings} from 'react-icons/fi'
import {BsGrid3X3} from 'react-icons/bs'
import {MdSlowMotionVideo} from 'react-icons/md'

 const Deatail = () => {
const [post, setPost] = useState(true)
const [video, setVideo] = useState(true)
const [save, setSave] = useState(true)
const [tag, setTag] = useState(true)

  return (
 <Container>
     <Wrapper>
         <Top>
             <Image src={pix}/>
             <Content>
                 <NameDetails>
                     <ProfileName>Dev feyikemi</ProfileName>
                     <EditButton>Edit Profile</EditButton>
                     <Icon/>
                 </NameDetails>
                 <Post>
                     <Count>{0}</Count>
                     <Title >posts</Title>
                 </Post>
                 <Detail>
                     <Name>Feyikemi</Name>
                     <Bio>Bio jdkssdkjds jjdsjcfkdkx djscjjjwjsd jsjdjjsz,sjh hjsjj hhashhx nxnjcj sjdxjkjd nfjkcdk kqkaskk mxksk jsjdjjz sjjdj <br/> dhchjjjs sdnhjerj wsjdj</Bio>
                     <Website>Skillhub.com</Website>
                 </Detail>
             </Content>
         </Top>
         <Nav>
             <NavHold
             bg={post ? "bg" : ""}
               onClick={()=>{
                setPost(true)
                setSave(false)
                setTag(false)
                setVideo(false)
            }}
             >
               
                 <NavIcon/>
                 <Title cap>Posts</Title>
             </NavHold>

             <NavHold
              bg={video ? "bg" : ""}
              onClick={()=>{
                     setPost(false)
                     setSave(false)
                     setTag(false)
                     setVideo(true)
                 }}>
                 <NavIcon2/>
                 <Title cap>video</Title>
             </NavHold>

             <NavHold
              bg={save ? "bg" : ""}
             onClick={()=>{
                     setPost(false)
                     setSave(true)
                     setTag(false)
                     setVideo(false)
                 }}>
                 <NavIcon2/>
                 <Title cap>save</Title>
             </NavHold>

             <NavHold
              bg={tag ? "bg" : ""}
             onClick={()=>{
                     setPost(false)
                     setSave(false)
                     setTag(true)
                     setVideo(false)
                 }}>
                 <NavIcon2/>
                 <Title cap>tag</Title>
             </NavHold>
         </Nav>
         <PostImages>
             <ImagePost src={pix}/>
             <ImagePost src={pix}/>
             <ImagePost src={pix}/>
         </PostImages>
     </Wrapper>
 </Container>
  )
}

export default Deatail
const PostImages = styled.div`
width: 100%;
justify-content: space-between;
flex-wrap: wrap;
display: flex;

`

const ImagePost = styled.img`
width:250px;
height: 250px;
object-fit: cover;
` 

const NavIcon2 = styled(MdSlowMotionVideo)`
margin-right: 3px;
font-size: 10px;
`
const Nav = styled.div`
width:100%;
display: flex;
justify-content: center;
border-top: 2px solid silver;
border-bottom: 2px solid silver;
align-items: center;
margin-top: 30px;
height: 70px;
`
const NavHold = styled.div`
display: flex;
align-items: center;
margin-right: 30px;
position: relative;
cursor: pointer;
:after{
    content: "";
    height: 2px;
    background-color: ${({bg})=> (bg ? "purple" : "transparent")};
    width:100%;
    position: absolute;
    margin-top: -21px;

}
`
const NavIcon = styled(BsGrid3X3)`
margin-right: 3px;
font-size: 10px;
`
const Title = styled.div`
text-transform: ${({cap})=>(cap ? "uppercase" : "normal")};
`
const Count = styled.div`
font-weight: 500;
margin-right: 5px;
`
const Image = styled.img`
width:150px;
height: 150px;
border-radius: 100%;
object-fit: cover;
`
const Content = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;

`
const NameDetails = styled.div`
display: flex;
margin: 10px 0;
align-items: center;

`
const ProfileName = styled.div`
font-size: 25px;
font-weight: lighter;
margin-right:20px;
`
const EditButton = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
height: 30px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
`
const Icon = styled(FiSettings)`
font-size: 30px;
margin-left: 10px;

:hover{
    cursor: pointer;
}
`
const Post = styled.div`
display: flex;
margin-right: 20px;
font-size: 13px;
`
const Detail = styled.div`
font-size:13px
`
const Name = styled.div`
    font-size: 500;
    margin-top: 10px;
`
const Bio = styled.div`
margin-top: 10px;
`
const Website = styled.div`
color :rbga(16, 143, 233);
font-style: italic;
text-decoration: none;
cursor: pointer;
color: blue;
margin-top: 3px;
`

const Container = styled.div`
    padding-top:70px;
    width:100%;
    display:flex;
    justify-content:center;
    background-color:#fafafa;
    height:100%;
    min-height:calc(100vh - 70px)
`
const Wrapper = styled.div``

const Top = styled.div`
display: flex;
margin-top: 30px;
`