import React from 'react';
import '../../tailwind.output.css';

function Message(props){
    return(
    <div className='border border-gray-200 my-3 rounded-lg pt-3'>
        {props.isCopied
        ? <div className='relative'>
            <p className='cursor-pointer text-gray-800 font-light text-base pb-6 px-4' onClick={(event) =>  {props.copyToClipboard(event); props.getSelectedMessage(props.message.id)}} dangerouslySetInnerHTML={{__html: props.message.fields.Message}}></p>
            <p className='w-full absolute bottom-0 text-xs bg-gray-800 text-white text-center font-light py-0.5 rounded-b-lg'>Copied to clipboard</p>
        </div>
        : <p className='cursor-pointer text-gray-800 font-light text-base pb-6 px-4' onClick={(event) =>  {props.copyToClipboard(event); props.getSelectedMessage(props.message.id)}} dangerouslySetInnerHTML={{__html: props.message.fields.Message}}></p>
        }
    </div>
)
}

export {Message};