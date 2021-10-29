import React, { useState } from 'react'
import data from '../../data/mail-data'


export const Filter = () => {

    const [namess, setnamess] = useState('');

    return (
        <div className = 'encabezado__main'>
            <div>
                <div>
                    <h6>Inbox</h6>
                    <div className = 'circ'><p>6</p></div>
                </div>
                <div className = "custom-select">
                    <select onChange = {(e)=>{ const selectedOption = e.target.value;
                    setnamess(selectedOption);
                    }}>
                        {
                            data.map((elements)=>{
                                return <option className = "select-selecte">{elements.name}</option>
                            })
                        }
                    </select>
                    {/* {namess}  mandarlo como elemento de filter*/} 
                </div>
            </div>
        </div>
    )
}
