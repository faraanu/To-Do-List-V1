exports.isInt = function (value) {
    if (parseInt(value, 10).toString() === value) {
      return true;
    }
    return false;

  }