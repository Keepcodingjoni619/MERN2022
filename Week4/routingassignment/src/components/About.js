import React from 'react'
import { useParams } from 'react-router-dom'

const About = (props) => {
    const {word, color, background} = useParams();
  return (
    <div>
          {
              
                isNaN(word)? 
                <p style={
                    color? 
                    {color: color, backgroundColor: background}
                    :null
                }>
                    This is a word: {word}
                </p>
                :
                <p>
                    This is a number: {word}
                </p>
            }
    </div>
  )
}

export default About