import React from 'react'
import data from '../../data/mail-data';
import { FiPaperclip } from "react-icons/fi";
// import { useGetData } from '../../hooks/useGetData'

export const Header = () => {
    return (
        <>
            {
                data.map((elements) => {
                    return (
                        <div className="body__header">
                            <p>{elements.name}</p>
                            <div className="head">
                                <h6>Tags</h6>
                                <div className = "inbox"><h6>inbox</h6></div>
                                <div className = "business"><h6>Business</h6></div>
                            </div>
                            <div className="body__content">
                                {elements.body}
                            </div>
                            <div className="container"><FiPaperclip className="attach" /></div>
                        </div>
                    )
                })
            }
        </>
    )
}