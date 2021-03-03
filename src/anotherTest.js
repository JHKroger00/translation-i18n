import React from 'react'
import Translate from '@docusaurus/Translate'

const AnotherTest = () => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <strong>
        <Translate
          id='test.AnotherTranslationTest'
          description='Homepage Another Translation Test message'
        >
          Another Translation Test
        </Translate>
      </strong>
    </div>  
  )
}

export default AnotherTest