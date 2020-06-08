import React from 'react';
import axios from 'axios';
import Handle from './Handle';
import Error from './Error';
import GetLocation from './GetLocation';

class Search extends React.Component {
    state = {term: '', collection: [], hasError: false, prevTerm: '', geo: false};

    onInputType = (e) => {

            this.setState({ term: e.target.value });

            if(this.state.hasError) {
                this.setState({hasError: null});
            }

    };

    getPosition = (lat,long) => {

        this.setState({
            term: lat + "," + long,
            geo: true //this was needed as term gets populated in input we don't want this
        });


        this.lookup();

    };

    onSearch = (e) => {

        e.preventDefault();

        this.lookup();

    };

    lookup = () => {
        const self = this;

        if(self.state.term !== '') {
            const api_key = "37711b8f1b63d3eba192f32d7c66a118";
            axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${this.state.term}`)
                .then(response => {
                    if(!response.data.hasOwnProperty('success')) {
                        self.setState({
                            collection: response.data,
                            term: '',
                            hasError: false
                        })
                    } else {
                        self.setState({
                            hasError: true,
                            prevTerm: this.state.term
                        })
                    }
                })

            self.setState({collection: []});

        }

    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="container header__container">
                        <div className="row header__container__row">
                            <form onSubmit={this.onSearch}>
                                <label htmlFor={"search"}>Weather</label>
                                <div className="input-wrapper">
                                    <input onChange={this.onInputType} name={"search"} type={"text"} value={this.state.hasError || this.state.geo  ? '' : this.state.term} placeholder="Enter Location" />
                                    <span className="search" onClick={this.onSearch}><i className="fa fa-search"></i></span>
                                </div>
                                <GetLocation sendData={this.getPosition} />
                            </form>
                        </div>
                    </div>
                </div>
                {(this.state.hasError || this.state.hasError === null) &&
                    <Error errorTerm={this.state.prevTerm}/>
                }
                {!this.state.hasError && this.state.collection.length !== 0 &&
                    <Handle data={this.state.collection} />
                }
            </div>
        );
    }
}

export default Search;