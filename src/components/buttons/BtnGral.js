import React from 'react'
// import Button from '@mui/material/Button';

export const BtnGral = () => {
    return (
        <>
        <div className="bntGral__btnGral">
            <div>
                {/* <Button variant="contained" className = "delete" >Delete</Button> */}
                <button className = "delete">Delete</button>
                <button className = "spam">Spam</button>
            </div>
            <button className = "unread">Mark as unread</button>
        </div>
        <hr></hr>
        </>
    )
}
