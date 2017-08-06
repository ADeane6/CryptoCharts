import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class PriceList extends Component {
    renderPrice(priceData) {
        console.log(priceData)
        const day_data = priceData.data.Data.slice(706);
        const week_data = priceData.data.Data.slice(563);
        const month_Data = priceData.data.Data;
        const day_price = day_data.map(data => data.high)
        const week_price = week_data.map(data => data.high)
        const month_price = month_Data.map(data => data.high)
        const name = priceData.request.responseURL.substr(-3)

        return (
            <tr >
                <td>
                    {name}
                </td> 
                <td><Chart data={day_price} color="blue" units="€" /></td>
                <td><Chart data={week_price} color="blue" units="€" /></td>
                <td><Chart data={month_price} color="blue" units="€" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Past Day (€)</th>
                        <th>Past Week (€)</th>
                        <th>Past Month (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.price.map(this.renderPrice)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ price }) {
    return { price }
}

export default connect(mapStateToProps)(PriceList)