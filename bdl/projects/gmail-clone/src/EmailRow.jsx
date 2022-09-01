import { Checkbox, IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import React from 'react'
import "./EmailRow.css"
import { LabelImportantOutlined } from '@material-ui/icons'


function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className='emailRow'>

        <div className="emailRow__options">
            <Checkbox />

            <IconButton >
                <StarBorderIcon />
            </IconButton>
             
             <IconButton>
            <LabelImportantOutlined />
            </IconButton>

        </div>
        

        <h3 className="emailRow__title">{title}</h3>

        <div className="emailRow__message">
           <h4>
            {subject}
            <span className='emailRow__description'>{description}</span>
           </h4>
        </div>

        <p className="emailRow__description">
          {time}
        </p>

    </div>
  )
}

export default EmailRow