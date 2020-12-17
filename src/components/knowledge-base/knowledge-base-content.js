import React, { Component } from 'react';
import axios from 'axios';
import KnowledgeBaseView from './knowledge-base-view';

class KnowledgeBaseContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            textToCopy: '',
            selectedMessageId: '',
            isCopied: false,
            triggers: [],
            cases: [],
            selectedTrigger: '',
            selectedCase: '',
        }
        this.getMessages = this.getMessages.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.getSelectedMessage = this.getSelectedMessage.bind(this);
        this.getTriggers = this.getTriggers.bind(this);
        this.getSelectedTrigger = this.getSelectedTrigger.bind(this);
        this.getCases = this.getCases.bind(this);
        this.getSelectedCase = this.getSelectedCase.bind(this);
    }

    getMessages = async() => {

        let baseURL = "https://api.airtable.com/v0/appreOzGpWJS7AEpr/Messages"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    messages: response.data.records,
                    isCopied: false,
                })
                // console.log(response);
            }
        }
        )
    }

    getSelectedMessage = async(selectedMessageId) => {
        await this.setState({
            selectedMessageId: selectedMessageId,
            // isCopied: false,
        })
    }

    getTriggers = async() => {

        let baseURL = "https://api.airtable.com/v0/appreOzGpWJS7AEpr/Triggers"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    triggers: response.data.records,
                })
            }
        }
        )
    }

    getSelectedTrigger = async(selectedTrigger) => {
        await this.setState({
            selectedTrigger: selectedTrigger
        })
    }

    getCases = async() => {

        let baseURL = "https://api.airtable.com/v0/appreOzGpWJS7AEpr/Cases"
        let headers = { 'authorization': "Bearer key04kzdBL9zJQCwp" }
    
        await axios.get(baseURL, {headers: headers})
        .then((response) => {
            if(response.status===200){
                this.setState({
                    cases: response.data.records,
                })
            }
        }
        )
    }

    getSelectedCase = async(selectedCase) => {
        await this.setState({
            selectedCase: selectedCase
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
        this.getMessages();
        this.getCases();
        this.getTriggers();
    }

    render(){
        // console.log(this.state);
        return(
            <div>
                <KnowledgeBaseView 
                    messages={this.state.messages} 
                    triggers={this.state.triggers}
                    cases={this.state.cases} 
                    copyToClipboard={this.copyToClipboard} 
                    selectedMessageId={this.state.selectedMessageId} 
                    getSelectedMessage={this.getSelectedMessage} 
                    isCopied={this.state.isCopied}
                    getSelectedTrigger={this.getSelectedTrigger}
                    selectedTrigger={this.state.selectedTrigger}
                    getSelectedCase={this.getSelectedCase}
                    selectedCase={this.state.selectedCase}
                />
            </div>
        )
    }
}

export default KnowledgeBaseContent;