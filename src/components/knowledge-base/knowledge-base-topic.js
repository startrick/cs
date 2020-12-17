import React from 'react';
import '../../tailwind.output.css';
import {FiPlus, FiMinus} from 'react-icons/fi';

function KnowledgeBaseTopicCollapsed(props){
        return(
        <div className='cursor-pointer p-4 border-b border-gray-200'  onClick={() => props.getSelectedTopic(props.helpTopic.id)}>
            <div className='flex flex-row items-center justify-between font-light text-lg'>
                <p className='text-gray-700'>{props.helpTopic.fields.topic}</p>
                <p className='text-purple-600'><FiPlus/></p>
            </div>
        </div>
    )
}

export {KnowledgeBaseTopicCollapsed};

function KnowledgeBaseTopicExpanded(props){
        return(
        <div className='bg-gray-50 border-b border-gray-200'>
            <div className='cursor-pointer flex flex-row items-center justify-between font-light text-lg pb-2 pt-4 px-4' onClick={() => props.getSelectedTopic('')}>
                <p className='text-gray-800'>{props.helpTopic.fields.topic}</p>
                <p className='text-purple-600'><FiMinus/></p>
            </div>
            {props.isCopied
            ? <div className='relative'>
                {/* <p className='cursor-pointer text-gray-600 font-light text-base pb-6 px-4' onClick={(event) =>  props.copyToClipboard(event)}>{props.helpTopic.fields.response}</p> */}
                <p className='cursor-pointer text-gray-600 font-light text-base pb-6 px-4' onClick={(event) =>  props.copyToClipboard(event)} dangerouslySetInnerHTML={{__html: props.helpTopic.fields.response}}></p>
                <p className='w-full absolute bottom-0 text-xs bg-purple-600 text-white text-center font-light py-0.5'>Copied to clipboard</p>
            </div>
            // : <p className='cursor-pointer text-gray-600 font-light text-base pb-6 px-4' onClick={(event) =>  props.copyToClipboard(event)}>{props.helpTopic.fields.response}</p>
            : <p className='cursor-pointer text-gray-600 font-light text-base pb-6 px-4' onClick={(event) =>  props.copyToClipboard(event)} dangerouslySetInnerHTML={{__html: props.helpTopic.fields.response}}></p>
            }
            {/* <p className='cursor-pointer text-gray-600 font-light text-base pb-4 px-4' onClick={(event) =>  props.copyToClipboard(event)}>{props.helpTopic.fields.response}</p> */}
        </div>
    )
}

export {KnowledgeBaseTopicExpanded};