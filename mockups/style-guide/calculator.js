
var calcError = {};

function isNumber(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function checkCalculatorError(label, val) {
  if (!val) return {'message': 'You must provide ' + label, 'current': true}; // if value is null
  if (!isNumber(val)) return {'message': label + ' must be a number', 'current': true}; // if not a number
  return false; // no error
}

var Calculate = {
  // Get Wattage/Amperage via Resistance & Voltage
  // Calculate.wattsAmps(resistance, voltage)
  'wattsAmps': function(resistance, voltage) {
    calcError = checkCalculatorError('Resistance', resistance) || checkCalculatorError('Voltage', voltage);
    if (!calcError.current) {
      var obj = {
        'amperage': (voltage / resistance),
        'wattage': voltage * (voltage / resistance),
        'resistance': parseFloat(resistance),
        'voltage': parseFloat(voltage)
      }
    }
    return obj || calcError;
  },
  // Get Voltage/Amperage via Resistance & Wattage
  // Calculate.wattsAmps(resistance, wattage)
  'voltsAmps': function(resistance, wattage) {
    calcError = checkCalculatorError('Resistance', resistance) || checkCalculatorError('Wattage', wattage);
    if (!calcError.current) {
      var obj = {
        'amperage': Math.sqrt(wattage / resistance),
        'wattage': parseFloat(wattage),
        'resistance': parseFloat(resistance),
        'voltage': (Math.sqrt(wattage / resistance)) * resistance
      }
    }
    return obj || calcError;
  },
  // Get Resistance & Voltage
  // Calculate.ohmsVolts(wattage, amperage)
  'ohmsVolts' : function(wattage, amperage) {
    calcError = checkCalculatorError('Wattage', wattage) || checkCalculatorError('Amperage', amperage);
    if (!calcError.current) {
      var obj = {
        'amperage': parseFloat(amperage),
        'wattage': parseFloat(wattage),
        'resistance': wattage / (Math.pow(amperage, 2)),
        'voltage': amperage * wattage / (Math.pow(amperage, 2))
      }
    }
    return obj || calcError;
  },
  // Get Wattage & Voltage
  // Calculate.wattageVolts(resistance, amperage)
  'wattageVolts' : function(resistance, amperage) {
    calcError = checkCalculatorError('Resistance', resistance) || checkCalculatorError('Amperage', amperage);
    if (!calcError.current) {
      var obj = {
        'amperage': parseFloat(amperage),
        'wattage': (amperage * resistance) * amperage,
        'resistance': parseFloat(resistance),
        'voltage': amperage * resistance
      }
    }
    return obj || calcError;
  },
  // Get Wattage & Ohms
  // Calculate.wattageOhms(voltage, amperage)
  'wattageOhms' : function(voltage, amperage) {
    calcError = checkCalculatorError('Voltage', voltage) || checkCalculatorError('Amperage', amperage);
    if (!calcError.current) {
      var obj = {
        'amperage': parseFloat(amperage),
        'wattage': voltage * amperage,
        'resistance': voltage / amperage,
        'voltage': parseFloat(voltage)
      }
    }
    return obj || calcError;
  }
}
