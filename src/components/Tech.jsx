import React from 'react'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">{
      technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>

        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech");