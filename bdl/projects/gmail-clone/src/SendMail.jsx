import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import { firebaseApiOrigin } from 'firebase-tools/lib/api'



function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm() 

    const dispatch = useDispatch()

    const onSubmit = (formData) => {
       console.log(formData)
       db.collection('emails').add(
         {
         to: formData.to,
         subject: formData.subject,
         message: formData.message,
         timestamp: firebaseApiOrigin.firestore.FieldValue.serverTimestamp(),
         }
       )
       dispatch(closeSendMessage())
    }

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>Nes Mesage</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close '/>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <input 
              
               placeholder='To' 
               type="email"  
               {...register('to', {required: true })}
               />
               {errors.to && <p className='sendMail__error'>To is Required!</p>}

            <input 
               
               placeholder='Subject' 
               type="text" 
               {...register('subject', {required: true })} 
               />

            <input
    
               placeholder='Message ...' 
               type="text" 
               className='sendMail__message' 
               {...register('message', {required: true })} 
               />
               {errors.message && <p className='sendMail__error'>Message is Required!</p>}


            <div className="sendMail__options">
               <Button 
                  variant='contained'
                  color='primary'
                  className='sendMail__send'
                  type='submit'
                  >
                    Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail