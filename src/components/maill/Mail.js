import React from 'react'
import data from '../../data/mail-data';
import { FiPaperclip } from "react-icons/fi";






export const Mail = () => {
    
    return (
        <>
            {
                data.map((elements) => {
                    return (
                        <div className="msj__main" key = {elements.from}>
                            <div className="date">
                                <h4>{elements.from}</h4>
                                <p>{elements.date}</p>
                            </div>
                            <div className="contenido">
                                <p>{elements.subject}</p>
                                <FiPaperclip className = "attach"/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
