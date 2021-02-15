import React, { Component } from 'react';
import axios from 'axios';
import './Tag.css';

const frequency  = [];

class Tag extends Component{
    state = {
        data: [],
        filterIndex: null,
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

    origin = () => {
        this.state.data.map((country) => (
            frequency.push(country?.origin)
        ))
    
        const countOrigin = (countryName) => {
            const count = frequency.filter((origin) => (
                origin === countryName
            ))
            return(  
                count.length
            )
        }
             
        const uniqueOrigin = frequency.filter((value, index, self) => (
            self.indexOf(value) === index
        ))
        
        return(
            uniqueOrigin.map((index) => (
                <button key={index.id}>{index}{` (${countOrigin(index)})`}</button>
            ))
        )
    }

    render(){
        return(
            <div className="tag">
                <div className="tag_heading">
                    <h3>Origin</h3>
                </div>
                <div className="tag_list">
                    {
                        this.origin()
                    }
                </div>
            </div>
        )
    }
}

export default Tag;