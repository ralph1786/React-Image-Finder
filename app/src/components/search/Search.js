import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from "axios";
import ImageResults from "../image-results/imageResults";

export default class Search extends Component {
  constructor(props){
      super(props);
      this.state = {
          searchText: '',
          amount: 15,
          apiUrl: 'https://pixabay.com/api',
          apiKey: '8791806-4893593e3d3b033800e7adc3a',
          images: []
      }
  }

  onTextChange = (e) => {
      const val = e.target.value;
      this.setState({[e.target.name]: val}, () => {
        //Clears Image grid when text field is empty.
        if (val === '') {
            this.setState({ images: [] })
        } else {
          axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
          .then(res => this.setState({images: res.data.hits}))
          .catch(err => console.log(err));
        }}
      )
  }
    //This limits the amount of images to be displayed.
  onAmountChange = (e, index, value) => this.setState({amount:value})
  
 render() {
    return (
      <div>
        <TextField 
            name="searchText"
            value={this.state.searchText}
            onChange= {this.onTextChange}
            floatingLabelText= "Search For Images"
            fullWidth={true}
        />
        <br />
        <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
        >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </div>
    )
  }
}
