import React from 'react'

export default function Band(props) {
    return (
        <div>
            <ul>
                <li>{props.band.text}</li>
            </ul>
        </div>
    )
}
