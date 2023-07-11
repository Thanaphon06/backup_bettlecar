Blockly.Python['switch'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
    
    var dropdown_button = block.getFieldValue('pin');
    
    code = '';;
    if(dropdown_button == 18){
      code = `beetlecar.put_button_a()`;
    }else if(dropdown_button == 5){
      code = `beetlecar.put_button_b()`;
    }
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['switch_toggle'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
   var dropdown_button = block.getFieldValue('pin');

   code = '';;
   if(dropdown_button == 18){
     code = `beetlecar.toggle_state_a`;
   }else if(dropdown_button == 5){
     code = `beetlecar.toggle_state_b`;
   }
    return [code, Blockly.Python.ORDER_NONE];
  };