Blockly.Python['led_onoff'] = function(block) {
  
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

    var dropdown_trig = block.getFieldValue('pin_trig');
    code = '';;
    if(dropdown_trig == 1){
      code = `beetlecar.led_left_on()\n`;
    }else if(dropdown_trig == 2){
      code = `beetlecar.led_left_off()\n`;
    }else if(dropdown_trig == 3){
      code = `beetlecar.led_right_on()\n`;
    }else if(dropdown_trig == 4){
      code = `beetlecar.led_right_off()\n`;
    }
    return code;
  };
