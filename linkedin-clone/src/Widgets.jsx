import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
        </div>
        {newsArticle("PAPA React is back", 'Top news - 90,99k readers')}
        {newsArticle("Nelson nyz bedel got a job", 'Top news - 999 readers')}
        {newsArticle("Tesla hits news hights", 'Cars & auto - 789 readers')}
        {newsArticle("Bitcoin Breaks $22k", 'Crypto - 4k readers')}
        {newsArticle("PAPA React launches courses", 'Top news - 60,03k readers')}
    </div>
  )
}

export default Widgets