import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ErrorIcon from '@mui/icons-material/Error'
import DeleteIcon from '@mui/icons-material/Delete'
import EmailIcon from '@mui/icons-material/Email'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import PrintIcon from '@mui/icons-material/Print'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import React from 'react'
import './Mail.css'
import { useNavigate } from 'react-router'

function Mail() {
  const history = useNavigate()
  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history('/')}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton >
            <MoveToInboxIcon />
          </IconButton>

          <IconButton >
            <ErrorIcon />
          </IconButton>

          <IconButton >
            <DeleteIcon />
          </IconButton>

          <IconButton >
            <EmailIcon />
          </IconButton>

          <IconButton >
            <WatchLaterIcon />
          </IconButton>

          <IconButton >
            <CheckCircleIcon />
          </IconButton>

          <IconButton >
            <LabelImportantIcon />
          </IconButton>

          <IconButton >
            <MoreVertIcon />
          </IconButton>

        </div>

        <div className="mail__toolsRight">
        <IconButton >
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton >
            <PrintIcon />
          </IconButton>

          <IconButton >
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
        <div className="mail__body">
          <div className="mail__bodyHeader">
             <h2>Subject</h2>
             <LabelImportantIcon  className='mail__important' />
             <p>Title</p>
             <p className='mail__time'>10pm</p>
          </div>

          <div className="mail__message">
            this is a message
          </div>
        </div>
    </div>
  )
}

export default Mail