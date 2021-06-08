import React from 'react';

const ToDOList = (props) =>{
   
    return (
        <>
            <div className="to_do_style">
                <i className='fa fa-times' 
                aria-hidden="true" 
                onClick={()=>{
                    props.onSelect(props.id);
                }} />
                <li key={props.text}>{props.text}</li>
            </div>
        </>
    
    );
    
};
export default ToDOList;