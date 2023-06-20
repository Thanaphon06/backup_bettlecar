Blockly.Python['ultra_read'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar_ultra_distance'] = 'from beetlecar_ultra import distance';
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
  
    
    var math_choice = block.getFieldValue('math');
    var read_number = Blockly.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);
  
    code = `distance() ${math_choice} ${read_number}`;
    return [code, Blockly.Python.ORDER_NONE];
  };