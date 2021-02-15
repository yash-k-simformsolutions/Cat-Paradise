import React, { Component } from 'react';
import axios from 'axios';
import './Tag.js';
import './Tag.css';

const frequency  = [];

const Origin = ({metaData}) => {
    metaData.map((country) => (
        frequency.push(country?.origin)
    ))

    const countOrigin = (countryName) => {
        const count = frequency.filter((origin) => (
            origin === countryName
        ))
        return(  
            (count.length / 2)
        )
    }
         
    const uniqueOrigin = frequency.filter((value, index, self) => (
        self.indexOf(value) === index
    ))

    return(
        <li>ALL (67)</li>,
        uniqueOrigin.map((index) => (
            <li key={index.id}>{index}{` (${countOrigin(index)})`}</li>
        ))
    )
}

class Tag extends Component{
    state = {
        data: [],
    }

    componentDidMount(){
        this.catCountry();
    }

    catCountry = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try{
            const response = await axios.get(url);
            const catcountry = await response.data;
            this.setState({
                data: catcountry,
            })
        } catch (error){
            console.log(error);
        }
    }
    
    render(){
        return(
            <div className="tag">
                <div className="tag_heading">
                    <h3>Origin</h3>
                </div>
                <div className="tag_list">
                    <Origin metaData = {this.state.data} key={this.state.data.id}/>
                </div>
            </div>
        )
    }
}

export default Tag;