import React from 'react'
import PremiumCardsList from '../../components/PremiumCardsList/PremiumCardsList'
import Price from '../../components/Price/Price'
import './PremiumPage.scss';

function PremiumPage() {
  return (
    <div className='premium-page'>
        <PremiumCardsList />
        <Price />
    </div>
  )
}

export default PremiumPage
