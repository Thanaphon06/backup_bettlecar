Blockly.Python['ultra_read'] = function(block) {
    Blockly.Python.definitions_['import_ultra'] = 'import Ultrasonic';
    Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  
  
    Blockly.Python.definitions_['triger_pin'] = 'ULTRASONIC_TRIGGER_PIN = 2';
    Blockly.Python.definitions_['echo_pin'] = 'ULTRASONIC_ECHO_PIN = 15';
    
    var math_choice = block.getFieldValue('math');
    var read_number = Blockly.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);
  
    code = `Ultrasonic.read(2, 15) ${math_choice} ${read_number}`;
    return [code, Blockly.Python.ORDER_NONE];
  };