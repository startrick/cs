import React from 'react';
import '../../tailwind.output.css';
import {Message} from './knowledge-base-topic';

function KnowledgeBaseView(props){
    const triggers = props.triggers.map((trigger) => {
        return(
            props.selectedTrigger === trigger.id
            ? <div 
                key={trigger.id} 
                className='rounded-full py-1.5 px-3 bg-gray-800 cursor-pointer text-white mx-1 my-0.5 sm:my-1 text-xs'
                onClick={() => {props.getSelectedTrigger(''); props.getSelectedCase('')}}
                >{trigger.fields.Triggers}
            </div>
            : <div 
                key={trigger.id}
                // className='rounded-full py-2 px-4 border border-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer text-gray-900 mx-2 my-1 sm:my-2 text-xs'
                className='rounded-full py-1.5 px-3 bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer text-gray-900 mx-1 my-0.5 sm:my-1 text-xs'
                onClick={() => {props.getSelectedTrigger(trigger.id); props.getSelectedCase('')}}
                >{trigger.fields.Triggers}
            </div>
        )
    }
    )

    const cases = props.cases
        .filter((condition) => condition.fields.Triggers.includes(props.selectedTrigger))
        .map((condition) => {
            return(
                props.selectedCase === condition.id
                ? <div 
                    key={condition.id} 
                    className='rounded-full py-1.5 px-3 bg-gray-800 cursor-pointer text-white mx-1 my-0.5 sm:my-1 text-xs'
                    onClick={() => props.getSelectedCase('')}
                    >{condition.fields.Condition}
                </div>
                : <div 
                    key={condition.id}
                    className='rounded-full py-1.5 px-3 bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer text-gray-900 mx-1 my-0.5 sm:my-1 text-xs'
                    onClick={() => props.getSelectedCase(condition.id)}
                    >{condition.fields.Condition}
                </div>
            )
    }
    )

    let messages;

    {props.selectedTrigger === ''
    ? messages = props.messages
        .map((message) => {
            return(
                props.selectedMessageId === message.id
                ? <Message key={message.id} message={message} copyToClipboard={props.copyToClipboard} getSelectedMessage={props.getSelectedMessage} isCopied={props.isCopied}/>
                : <Message key={message.id} message={message} copyToClipboard={props.copyToClipboard} getSelectedMessage={props.getSelectedMessage}/>
            )
        }
        )
    : messages = props.messages
        .filter((message) => message.fields.Trigger.includes(props.selectedTrigger) && message.fields.Case.includes(props.selectedCase))
        .map((message) => {
            return(
                props.selectedMessageId === message.id
                ? <Message key={message.id} message={message} copyToClipboard={props.copyToClipboard} getSelectedMessage={props.getSelectedMessage} isCopied={props.isCopied}/>
                : <Message key={message.id} message={message} copyToClipboard={props.copyToClipboard} getSelectedMessage={props.getSelectedMessage}/>
            )
        }
        )
    }


    return(
        <div className='flex flex-col items-center mt-10 px-4'>
            <div className='w-full sm:w-160'>
                    <p className='text-4xl font-light text-gray-900 px-4'>cooper</p>
                    <p className='text-xl font-light pt-2 pb-4 text-gray-600 px-4'>Find the trigger and condition, tap on the message to copy and paste it in Slack.</p>
                    <p className='text-sm px-4 text-gray-600 font-normal mt-2 mb-1'>Filter by trigger</p>
                    <div className='flex flex-wrap px-2'>
                        {triggers}
                    </div>
                    {props.selectedTrigger === ''
                    ? <div></div>
                    : <div>
                        <div className='border-b my-4'></div>
                        <p className='text-sm px-4 text-gray-600 font-normal mt-2 mb-1'>Filter by condition</p>
                        <div className='flex flex-wrap px-2'>
                            {cases}
                        </div>
                    </div>
                    }
                    <div className='my-6'>
                        {messages}
                    </div>
            </div>
        </div>
    )
}

export default KnowledgeBaseView;

