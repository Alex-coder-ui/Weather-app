import React from 'react';
import Citycard from './Citycard';

const CityList = (props) => {
    if (!props.cities || !props.cities.length) return <div></div>;

    const cities = props.cities.map((city) =>
        <div key={city.id} className="city-element">
            <Citycard city={city}  onClick={props.clickCity}/>
        </div>
    );

    return (
        <div>
            <div className="city-list">{cities}</div>
        </div>
    );
}

export default CityList;