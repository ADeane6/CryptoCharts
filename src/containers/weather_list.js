import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const {lon, lat }= cityData.city.coord
        const temperature = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td><Chart data={temperature} color="blue" units="c" /></td>
                <td><Chart data={pressure} color="orange" units="hPa" /></td>
                <td><Chart data={humidity} color="red" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (c)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)