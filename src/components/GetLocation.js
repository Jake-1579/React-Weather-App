import React from 'react';

class GetLocation extends React.Component {
    state = {lat: '', long: ''};

    geoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getLatLong);
        } else {
            alert('not supported');
        }
    };

    getLatLong = (position) => {

        this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
        });

        this.props.sendData(this.state.lat, this.state.long);

    };

    render() {
        return (
            <span className="location" onClick={this.geoLocation}>
                <i className="fa fa-map-marker"></i>
            </span>
        )
    }

}

export default GetLocation;