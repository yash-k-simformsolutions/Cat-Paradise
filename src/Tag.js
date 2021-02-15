import React, { Component } from 'react';
import './Tag.css';

const frequency  = [];

class Tag extends Component{
    state = {
        filterIndex: null,
    }

    origin = () => {
        this.props.data.map((country) => (
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
                <button key={index.id} >{index}{` (${countOrigin(index)})`}</button>
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