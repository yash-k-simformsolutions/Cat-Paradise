import React, { Component } from 'react';
import axios from 'axios';
import './Body.css';
import Modal from 'react-bootstrap/esm/Modal';


class Body extends Component{
    state = {
        data: [],
        openModal: false,
        modalIndex: null,
    }
    
    componentDidMount(){
        this.catData()
    }
    
    catData = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try{
            const response = await axios.get(url);
            const catdata = await response.data;
            this.setState({
                data: catdata,
            })
            console.log('Array is: ')
            console.log(this.state.data)
        } catch(error){
            console.log(error)
        }
    };
    
    hideModal = () => {
        this.setState({
            openModal: false,
        })
        console.log('Array is: ')
        console.log(this.state.data[this.state.modalIndex])
    }
    
    styles = {
        backgroundImage: this.state.data[this.state.modalIndex]?.image?.url,
    }
    
    render(){
        return(
            <div className="body">
                {
                    this.state.data.map((cat, index) => (
                            <div className="body_card" key={cat.id}>
                                <div className="body_cardImage">
                                    <img src={cat.image?.url} alt={cat.name} />
                                </div>
                                
                                <div className="body_cardInfo">
                                    <h3>{cat.name}</h3>
                                    <button onClick={() => {this.setState({ openModal: true, modalIndex: index })}} id={cat.id} >View Details</button>
                                </div>
                                
                            </div>
                    ))
                }

                <Modal
                    {...this.state.data[this.state.modalIndex]}
                    show= {this.state.openModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal"
                    style = {this.styles}
                >
                    <Modal.Body>
                        <div className="modal_Briefinfo">
                            <img src={this.state.data[this.state.modalIndex]?.image?.url} alt={this.state.data[this.state.modalIndex]?.name} />
                            <div className="modal_Heading">
                                <h2>{this.state.data[this.state.modalIndex]?.name}</h2>
                                <h4>{this.state.data[this.state.modalIndex]?.origin}</h4>    
                            </div>
                        </div>
                        <div className="modal_Moreinfo">
                            <p>{this.state.data[this.state.modalIndex]?.description}</p>
                            <p><span>Lifespan:</span> {this.state.data[this.state.modalIndex]?.life_span} years</p>
                            <p><span>Temperament:</span> {this.state.data[this.state.modalIndex]?.temperament}</p>
                            <p><span>Weight:</span> {this.state.data[this.state.modalIndex]?.weight?.metric} Kgs </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={this.hideModal} className="modal_Button" >Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Body;