import React from 'react'

import Card from './card'
import projectsArray from '../assets/data/projects_data'

export default props => {
  const cardList = projectsArray.map((item, index) => {
    return (
      <Card
        title={item.name}
        info={item.info}
        src={item.img}
        gif={item.gif}
        key={index}
        alt={item.alt}
        developers={item.developers}
        code={item.codeLink}
        demo={item.demoLink}
      />
    )
  })

  return (
    <section id='projects'>
      <h1>Projects</h1>
      <div className='row'>
        {cardList}
      </div>
    </section>
  )
}
