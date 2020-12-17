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
            isCopied: false,
            keywords: [],
            filter: '',
        }
        this.getKnowledgeBaseContent = this.getKnowledgeBaseContent.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.getSelectedTopic = this.getSelectedTopic.bind(this);
        this.getKeywords = this.getKeywords.bind(this);
        this.getSelectedFilter = this.getSelectedFilter.bind(this);
    }

    getKnowledgeBaseContent = async() => {

        let baseURL = "https://api.airtable.com/v0/appZD9qRVCfSRenHA/Customer%20Support%20Queries"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    helpTopics: response.data.records,
                    isCopied: false,
                })
            }
        }
        )
    }

    getSelectedTopic = async(selectedTopicId) => {
        await this.setState({
            selectedTopicId: selectedTopicId,
            isCopied: false,
        })
    }

    getKeywords = async() => {

        let baseURL = "https://api.airtable.com/v0/appZD9qRVCfSRenHA/Keywords"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    keywords: response.data.records,
                })
            }
        }
        )
    }

    getSelectedFilter = async(filter) => {
        await this.setState({
            filter: filter,
        })
    }

    copyToClipboard = async(event) => {
        // console.log(event.target.innerText);
        await this.setState({
            textToCopy: event.target.innerText,
            isCopied: true,
        });
        navigator.clipboard.writeText(this.state.textToCopy);
    }

    componentDidMount(){
        this.getKnowledgeBaseContent();
        this.getKeywords();
    }

    render(){
        // console.log(this.state);
        return(
            <div>
                <KnowledgeBaseView 
                    helpTopics={this.state.helpTopics} 
                    keywords={this.state.keywords} 
                    copyToClipboard={this.copyToClipboard} 
                    selectedTopicId={this.state.selectedTopicId} 
                    getSelectedTopic={this.getSelectedTopic} 
                    isCopied={this.state.isCopied}
                    getSelectedFilter={this.getSelectedFilter}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}

export default KnowledgeBaseContent;