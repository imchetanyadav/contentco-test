import React from 'react'
import Section1 from '../components/home/Section1'
import Section2 from '../components/home/Section2'
import Section3 from '../components/home/Section3'

class IndexPage extends React.Component {

  render() {
    
    return (
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    )
  }
}

export default IndexPage
