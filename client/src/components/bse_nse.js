import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './../App.css';

class BSENSE extends Component {
  constructor(props) {
    super(props);
    this.handleScrape = this.handleScrape.bind(this);
    this.state = {
      data : [],
      scraped : false
    }
  }

  handleScrape = () => {
    fetch('/scrape')
    .then(res => {
        return res.text()
      })
    .then(jsondata => {
        this.setState({ data :  JSON.parse(jsondata),scraped:true})
      });
  }

  render() {
    return (
        <div className="App">
          <Button color="primary" style={{marginTop:'10px'}} type="button" onClick={this.handleScrape}>Scrape BSE/NSE</Button>
          <div>
              {this.state.scraped ? 
                <ul style={{marginTop:"8px"}}>
                    {
                        this.state.data.map((value, index)=>{
                            return (<li key={index} className="li-style">BSE : {value.bse} | NSE : {value.nse}</li>)
                        })
                    }
                </ul>
            : 'Data not scraped'
            }    
          </div>
        </div>
    );
  }
}

export default BSENSE;