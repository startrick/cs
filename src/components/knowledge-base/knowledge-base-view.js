import React from 'react';
import '../../tailwind.output.css';
import {KnowledgeBaseTopicExpanded, KnowledgeBaseTopicCollapsed} from './knowledge-base-topic';

function KnowledgeBaseView(props){
    const keywords = props.keywords.map((keyword) => {
        return(
            props.filter === keyword.id
            ? <div 
                key={keyword.id} 
                className='rounded-full py-2 px-4 border border-purple-600 bg-purple-600 cursor-pointer text-white mx-2 my-1 sm:my-2 text-xs'
                onClick={() => props.getSelectedFilter('')}
                >{keyword.fields.Keywords}
            </div>
            : <div 
                key={keyword.id} 
                className='rounded-full py-2 px-4 border border-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer text-gray-900 mx-2 my-1 sm:my-2 text-xs'
                onClick={() => props.getSelectedFilter(keyword.id)}
                >{keyword.fields.Keywords}
            </div>
        )
    }
    )

    let helpTopics;

    {props.filter === ''
    ? helpTopics = props.helpTopics
        .map((helpTopic) => {
            return(
                props.selectedTopicId === helpTopic.id
                ? <KnowledgeBaseTopicExpanded key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic} isCopied={props.isCopied}/>
                : <KnowledgeBaseTopicCollapsed key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic}/>
            )
        }
        )
    : helpTopics = props.helpTopics
        .filter((helpTopic) => helpTopic.fields.keywords.includes(props.filter))
        .map((helpTopic) => {
            return(
                props.selectedTopicId === helpTopic.id
                ? <KnowledgeBaseTopicExpanded key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic} isCopied={props.isCopied}/>
                : <KnowledgeBaseTopicCollapsed key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic}/>
            )
        }
        )
    }

    return(
        <div className='flex flex-col items-center mt-10 px-4'>
            <div className='w-full sm:w-160'>
                    <p className='text-4xl font-light text-gray-900 px-4'>Support Assistant</p>
                    <p className='text-xl font-light pt-2 pb-4 text-gray-500 px-4'>Open the relevant topic, tap on the reponse to copy and paste it in Crisp/ Email.</p>
                    <div className='flex flex-wrap px-2'>
                        {keywords}
                    </div>
                    {helpTopics}
            </div>
        </div>
    )
}

export default KnowledgeBaseView;

