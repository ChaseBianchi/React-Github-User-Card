import React from 'react'
import styled from 'styled-components'

const StyledDiv=styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: column nowrap;
img{
    object-fit: contain;
}
`

export default function Card(props) {
// console.log('git', props.github)
    
return (
        <StyledDiv>
        <h2>{props.github.login}</h2>
        <p>{props.github.location}</p>
        <img alt='user avatar' src={props.github.avatar_url}></img>
        <br/>
        <a href={props.github.html_url}>Go to Github page</a>
        
         <div>Followers:
            <ul>
                {props.followers.map(person=><li>{person}</li>)}
            </ul>
        </div>
        </StyledDiv>
    )
}
