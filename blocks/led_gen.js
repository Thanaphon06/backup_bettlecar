Blockly.Python['led_onoff'] = function(block) {
  Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    
    var dropdown_trig = block.getFieldValue('pin_trig');
    code = '';;
    if(dropdown_trig == 1){
      code = `Pin(33, Pin.OUT).value(1)\n`;
    }else if(dropdown_trig == 2){
      code = `Pin(12, Pin.OUT).value(1)\n`;
    }
    return code;
  };
Blockly.Python['ledoff'] = function(block) {
  Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    
    var dropdown_trig = block.getFieldValue('pin_trig');
    code = '';;
    if(dropdown_trig == 1){
      code = `Pin(33, Pin.OUT).value(0)\n`;
    }else if(dropdown_trig == 2){
      code = `Pin(12, Pin.OUT).value(0)\n`;
    }
    return code;
  };