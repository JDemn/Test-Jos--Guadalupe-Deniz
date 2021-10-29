import React, { useEffect, useState } from 'react'
import data from '../../data/mail-data';
import { FiPaperclip } from "react-icons/fi";

export const Mail = () => {

    const [unread, setunread] = useState(false)

    useEffect(() => {
    }, [unread])

    const handleChangeColor = ({currentTarget}) => {
        console.log(currentTarget);
        if(currentTarget.className === 'msj__main'){
            setunread(!unread);
            currentTarget.className = 'msj__readed';
        } else if (currentTarget.className === 'msj__readed'){
            currentTarget.className = 'msj__main'
        }
        
    }
 
    console.log('me ejecuté');
    return (
        <>
            {
                data.map((elements) => {
                    return (
                        <>
                            {/* .msj__readed */}
                            <div className = 'msj__main' key={elements.from} onClick={handleChangeColor}>
                                {unread && <div className = "colilla"></div>}
                                <div className="date">
                                    <h4>{elements.from}</h4>
                                    <p>{elements.date}</p>
                                </div>
                                <div className="contenido">
                                    <p>{elements.subject}</p>
                                    <FiPaperclip className="attach" />
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )

}
