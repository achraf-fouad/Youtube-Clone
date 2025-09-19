export const API_KEY = "AIzaSyDBeq5XsRu2Ww3QxS-iZlXeO6z6-M0v3OU";

export const value_converter = (value) => {
    if (value >= 1000000){
        return Math.floor(value / 1000000 ) + "M";
    } else if (value >= 1000) {
        return Math.floor(value/1000) + "K";
    } else {
        return value;
    }
}
