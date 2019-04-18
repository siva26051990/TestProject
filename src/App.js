import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      jsonData : ''
    }
  }

  componentDidMount(){
    let url = "http://www.json-generator.com/api/json/get/bVmKGkqEzm?indent=2";

    axios.get(url)
      .then(res => {
        const jsonData = res.data;
        this.setState({ jsonData });
      })

  }

  render() {

    const xlsUrl = `http://view.officeapps.live.com/op/view.aspx?src=${this.state.jsonData.excelUrl}`;
    const pdfUrl = this.state.jsonData.pdfUrl;
    let origUrl = this.state.jsonData.docUrl;
    let docUrl = "https://docs.google.com/gview?url="+origUrl+"&embedded=true";
    return (
      <div className="App">
      
      <div className="linkDiv" onClick={()=>window.open(xlsUrl, "_blank")}>Open Excel File</div>
      <div className="linkDiv" onClick={()=>window.open(pdfUrl, "_blank")}>Open PDF File</div>
      <iframe src={docUrl}> click me</iframe>
      <p><small>No browsers currently have the code necessary to render Word Documents, 
                  there are no client-side libraries that currently exist for rendering them either.
                  However, if you only need to display the Word Document, but don't need to edit it, 
                  you can use Google Documents' Viewer via an iframe to display a remotely hosted .doc/.docx. 
          </small>
      </p>
      

      
        
      </div>
    );
  }
}

export default App;
