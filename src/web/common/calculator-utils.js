// Checks if value is a number
  export function isNumber(val) {
    return !isNaN(parseFloat(val)) && isFinite(val)
  }

// Checks for Errors
  export function checkCalculatorError(label, val) {
    if (val == 0) return {'message': label + ' cannot be zero', 'error': true}
    if (!val) return {'message': 'You must provide ' + label, 'error': true} // if value is null
    if (!isNumber(val)) return {'message': label + ' must be a number', 'error': true} // if not a number
    return false; // no error
  }


// Get watts/Amperage via ohms & volts
// Calculate.wattsAmps(ohms, volts)
  export function wattsAmps(ohms, volts) {
    var calcError = checkCalculatorError('ohms', ohms) || checkCalculatorError('volts', volts);
    var obj = {
      'message': calcError.message || null,
      'error': calcError.error || null,
      'amperage': 'n/a',
      'watts': 'n/a'
    }
    if (!calcError.error) {
      obj.amperage = volts / ohms
      obj.watts = volts * (volts / ohms)
    }
    return obj
  }

// Get volts/Amperage via ohms & watts
// Calculate.wattsAmps(ohms, watts)
  export function voltsAmps(ohms, watts) {
    var calcError = checkCalculatorError('ohms', ohms) || checkCalculatorError('watts', watts);
    var obj = {
      'message': calcError.message || null,
      'error': calcError.error || null,
      'amperage': 'n/a',
      'volts': 'n/a'
    }
    if (!calcError.error) {
      obj.amperage = Math.sqrt(watts / ohms),
      obj.volts = (Math.sqrt(watts / ohms)) * ohms
    }
    return obj;
  }

// Get ohms & volts
// Calculate.ohmsVolts(watts, amperage)
  export function ohmsVolts(watts, amperage) {
    var calcError = checkCalculatorError('watts', watts) || checkCalculatorError('Amperage', amperage);
    var obj = {
      'message': calcError.message || null,
      'error': calcError.error || null,
      'ohms': 'n/a',
      'volts': 'n/a'
    }
    if (!calcError.error) {
      obj.ohms = watts / (Math.pow(amperage, 2)),
      obj.volts = amperage * watts / (Math.pow(amperage, 2))
    }
    return obj;
  }


// Get watts & volts
// Calculate.wattsVolts(ohms, amperage)
  export function wattsVolts(ohms, amperage) {
    var calcError = checkCalculatorError('ohms', ohms) || checkCalculatorError('Amperage', amperage);
    var obj = {
      'message': calcError.message || null,
      'error': calcError.error || null,
      'watts': 'n/a',
      'volts': 'n/a'
    }
    if (!calcError.error) {
      obj.watts = (amperage * ohms) * amperage,
      obj.volts = amperage * ohms
    }
    return obj;
  }


// Get watts & Ohms
// Calculate.wattsOhms(volts, amperage)
  export function wattsOhms(volts, amperage) {
    var calcError = checkCalculatorError('volts', volts) || checkCalculatorError('Amperage', amperage);
    var obj = {
      'message': calcError.message || null,
      'error': calcError.error || null,
      'watts': 'n/a',
      'ohms': 'n/a'
    }
    if (!calcError.error) {
      obj.watts = volts * amperage,
      obj.ohms = volts / amperage
    }
    return obj;
  }
