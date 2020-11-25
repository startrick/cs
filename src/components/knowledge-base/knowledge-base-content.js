import React, { Component } from 'react';
import axios from 'axios';
import KnowledgeBaseView from './knowledge-base-view';

class KnowledgeBaseContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            helpTopics: [],
            textToCopy: '',
            selectedTopicId: '',
        }
        this.getKnowledgeBaseContent = this.getKnowledgeBaseContent.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    getKnowledgeBaseContent = async() => {

        let baseURL = "https://api.airtable.com/v0/appZD9qRVCfSRenHA/Customer%20Support%20Queries"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    helpTopics: response.data.records,
                })
            }
        }
        )
    }

    getSelectedTopic = async(selectedTopicId) => {
        await this.setState({
            selectedTopicId: selectedTopicId,
        })
    }

    copyToClipboard = async(event) => {
        // console.log(event.target.innerText);
        await this.setState({
            textToCopy: event.target.innerText,
        });
        navigator.clipboard.writeText(this.state.textToCopy);
    }

    componentDidMount(){
        this.getKnowledgeBaseContent();
    }

    render(){
        return(
            <div>
                <KnowledgeBaseView helpTopics={this.state.helpTopics} copyToClipboard={this.copyToClipboard} selectedTopicId={this.state.selectedTopicId} getSelectedTopic={this.getSelectedTopic}/>
            </div>
        )
    }
}

export default KnowledgeBaseContent;