import React from 'react'
import PremiumCardsList from '../../components/PremiumCardsList/PremiumCardsList'
import './PremiumPage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

function PremiumPage() {
  return (
    <div className='premium-page'>
      <SearchBar/>
        <PremiumCardsList />
    </div>
  )
}

export default PremiumPage
