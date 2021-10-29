import React, { useEffect, useState } from 'react'
import data from '../../data/mail-data';
import { FiPaperclip } from "react-icons/fi";

export const Mail = () => {

    const [unread, setunread] = useState(false)
    
    useEffect(() => {
        handleChangeColor();
    }, [])
    
    const handleChangeColor=()=>{
        // console.log(e.target);
        setunread(!unread); //false
    }
    console.log('me ejecuté');
    return (
        <>
            {
                unread ? (
                    <>
                        {
                            data.map((elements) => {
                                return (
                                    <>
                                    <div className="msj__main" key={elements.from} onClick = { handleChangeColor }>
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
                    :
                    <>
                        {
                            data.map((elements) => {
                                return (
                                    <div className="msj__readed" key={elements.from} onClick = { handleChangeColor }>
                                        <div className = "colilla"></div>
                                        <div className="date">
                                            <h4>{elements.from}</h4>
                                            <p>{elements.date}</p>
                                        </div>
                                        <div className="contenido">
                                            <p>{elements.subject}</p>
                                            <FiPaperclip className="attach" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
            }

        </>
    )

}
