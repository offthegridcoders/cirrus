var Calculate = {
  // Get Wattage/Amperage via Resistance & Voltage
  // Calculate.wattsAmps(resistance, voltage)
  'wattsAmps': function(resistance, voltage) {
    return {
      'amperage': (voltage / resistance),
      'wattage': voltage * (voltage / resistance),
      'resistance': resistance,
      'voltage': voltage
    }
  },
  // Get Voltage/Amperage via Resistance & Wattage
  // Calculate.wattsAmps(resistance, wattage)
  'voltsAmps': function(resistance, wattage) {
    return {
      'amperage': Math.sqrt(wattage / resistance),
      'wattage': wattage,
      'resistance': resistance,
      'voltage': (Math.sqrt(wattage / resistance)) * resistance
    }
  },
  // Get Resistance & Voltage
  // Calculate.ohmsVolts(wattage, amperage)
  'ohmsVolts' : function(wattage, amperage) {
    return {
      'amperage': amperage,
      'wattage': wattage,
      'resistance': wattage / (Math.pow(amperage, 2)),
      'voltage': amperage * wattage / (Math.pow(amperage, 2))
    }
  },
  // Get Wattage & Voltage
  // Calculate.wattageVolts(resistance, amperage)
  'wattageVolts' : function(resistance, amperage) {
    return {
      'amperage': amperage,
      'wattage': (amperage * resistance) * amperage,
      'resistance': resistance,
      'voltage': amperage * resistance
    }
  },
  // Get Wattage & Ohms
  // Calculate.wattageOhms(voltage, amperage)
  'wattageOhms' : function(voltage, amperage) {
    return {
      'amperage': amperage,
      'wattage': voltage * amperage,
      'resistance': voltage / amperage,
      'voltage': voltage
    }
  }
}
