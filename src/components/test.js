import React from 'react'
import Translate from '@docusaurus/Translate'

const Test = () => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <strong>
        <Translate 
          id='test.TranslationTest'
          description='Homepage Translation Test message'
        >
          Translation Test
        </Translate>
      </strong>
    </div>  
  )
}

export default Test