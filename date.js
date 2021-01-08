
exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const date =  today.toLocaleDateString("en-US", options);
    return date;
}

exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    const day =  today.toLocaleDateString("en-US", options);
    return day;
}


/*
module.exports = getDate;

function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const date =  today.toLocaleDateString("en-US", options);
    return date;
}
*/