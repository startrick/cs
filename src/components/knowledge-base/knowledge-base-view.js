import React from 'react';
import '../../tailwind.output.css';
import {KnowledgeBaseTopicExpanded, KnowledgeBaseTopicCollapsed} from './knowledge-base-topic';

function KnowledgeBaseView(props){
    const helpTopics = props.helpTopics.map((helpTopic) => {
        return(
            props.selectedTopicId === helpTopic.id
            ? <KnowledgeBaseTopicExpanded key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic} isCopied={props.isCopied}/>
            : <KnowledgeBaseTopicCollapsed key={helpTopic.id} helpTopic={helpTopic} copyToClipboard={props.copyToClipboard} getSelectedTopic={props.getSelectedTopic}/>
        )
    }
    )

    return(
        <div className='flex flex-col items-center mt-10 px-4'>
            <div className='w-full sm:w-160'>
                    <p className='text-4xl font-light text-gray-900 px-4'>Help Center</p>
                    <p className='text-xl font-light pt-2 pb-4 text-gray-500 px-4'>Need answers? Find them here!</p>
                    {helpTopics}
            </div>
        </div>
    )
}

export default KnowledgeBaseView;

