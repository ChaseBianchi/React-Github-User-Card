import React from 'react'
import styled from 'styled-components'

const StyledDiv=styled.div`
width: 600px;
height: auto;
display: flex;
flex-flow: column nowrap;
align-items: center;
border: 3px solid blue;
border-radius: 20px;
margin-top: 10px;
background-color: #e8e9ff;
img{
    object-fit: contain;
    border: 2px solid #a0a8ff;
}
ul{
    list-style: none;
    display: flex;
    flex-direction: column wrap;
    justify-content: center;
    margin-bottom: 15px;
}

`

export default function Card(props) {
// console.log('git', props.github)
    
return (
        <StyledDiv>
        <h2>{props.github.login}</h2>
        <h3>{props.github.location}</h3>
        <img alt='user avatar' src={props.github.avatar_url}></img>
        <br/>
        <a href={props.github.html_url}>Go to Github page</a>
        <h3 styled={{textAlign: 'center'}}>Followers:</h3>
         <div>
             
            <ul>
                {
                props.followers.length===0
                ? <li>{props.github.login} has no Followers</li>
                : props.followers.map(person=><li>{person}</li>)
                }
            </ul>
        </div>
        </StyledDiv>
    )
}
