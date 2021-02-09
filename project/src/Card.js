import React from 'react'

export default function Card(props) {
console.log('git', props.github)
    
return (
        <div>
        <h2>{props.github.login}</h2>
        <p>{props.github.location}</p>
        <img alt='user avatar' src={props.github.avatar_url}></img>
        <a href={props.github.html_url}>Go to Github page</a>
        
         <div>Followers:
            <ul>
                {props.followers.map(person=><li>{person}</li>)}
            </ul>
        </div>
        </div>
    )
}
