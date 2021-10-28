import React from 'react'
import { BiSearch } from "react-icons/bi";

export const Inputt = () => {
    return (
        <form className="input__search">
            <div className = "search">
                <input
                    type="text"
                    placeholder="Search"
                />
                <div className = "icon">
                    <BiSearch className = "biSearch"/>
                </div>
            </div>
        </form>
    )
}
