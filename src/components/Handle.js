import React from 'react';

class Handle extends React.Component {

    render() {
        const i = this.props.data;
        const {weather_icons, temperature, weather_descriptions} = this.props.data.current;
        return (
            <div className="weather">
                <div className="container weather__container">
                    <div className="row weather__container__row">
                        <div className="grouper">
                            <h1>{i.location.name}</h1>
                            <div className="grouper__section">
                                <img src={weather_icons} alt={i.location.name} />
                                <p className="temp">{temperature}º</p>
                                <p className="description">{weather_descriptions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Handle;