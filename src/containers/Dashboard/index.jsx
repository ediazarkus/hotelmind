import React from 'react'
import Header from '../../components/Header'
import RoomsTable from '../../components/RoomsTable'

const styles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
}

const index = () => {
  return (
    <div style={styles}>
        <Header/>
        <RoomsTable/>
    </div>
  )
}

export default index