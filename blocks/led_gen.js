Blockly.Python['led_onoff'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    
    var dropdown_trig = block.getFieldValue('pin_trig');
    var dropdown_onoff = Blockly.Python.valueToCode(block, 'onoff', Blockly.Python.ORDER_ATOMIC);
    code = '';;
    if(dropdown_trig == 1){
      code = `Pin(33, Pin.OUT).value(${dropdown_onoff})\n`;
    }else if(dropdown_trig == 2){
      code = `Pin(12, Pin.OUT).value(${dropdown_onoff})\n`;
    }
    return code;
  };