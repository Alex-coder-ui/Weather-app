export default function deleteCardData(weatherData) {
    return function (dispatch) {
        return (

            dispatch({type: "DELETE_CARD_DATA", id: weatherData.id})
        )
    }
}
