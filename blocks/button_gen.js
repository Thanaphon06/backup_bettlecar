Blockly.Python['switch'] = function(block) {
  Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
  
  
  
  
    //button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)
    
    var dropdown_button = block.getFieldValue('pin');
    
    
    code = '';;
    if(dropdown_button == 18){
      code = `button_a.value() == 1`;
    }else if(dropdown_button == 5){
      code = `button_b.value() == 1`;
    }
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['switch_toggle'] = function(block) {
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonA_pin'] = 'buttonA_pin = 18';
    Blockly.Python.definitions_['buttonB_pin'] = 'buttonB_pin = 5';

    
    Blockly.Python.definitions_['button_a'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['button_b'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state_a'] = 'toggle_state_a = False';
    Blockly.Python.definitions_['toggle_state_b'] = 'toggle_state_b = False';
    
   Blockly.Python.definitions_['toggle_a'] = 'def toggle_pin_a():\n    global toggle_state_a\n    toggle_state_a = not toggle_state_a';
    Blockly.Python.definitions_['handerler_a'] = 'def toggle_interrupt_handler_a(pin_a):\n    if pin_a.value() == 0:\n        toggle_pin_a()';
    
    Blockly.Python.definitions_['button_a.irq'] = 'button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_a)\n';
    
    Blockly.Python.definitions_['def_toggle_b'] = 'def toggle_pin_b():\n    global toggle_state_b\n    toggle_state_b = not toggle_state_b';
   Blockly.Python.definitions_['def_hander_b'] = 'def toggle_interrupt_handler_b(pin_b):\n    if pin_b.value() == 0:\n        toggle_pin_b()';
   Blockly.Python.definitions_['buton_birq'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_b)\n';


   var dropdown_button = block.getFieldValue('pin');

   code = '';;
   if(dropdown_button == 18){
     code = `toggle_state_a`;
   }else if(dropdown_button == 5){
     code = `toggle_state_b`;
   }
    return [code, Blockly.Python.ORDER_NONE];
  };
  /*Blockly.Python['buttonB_toggle'] = function(block) {
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
  
    Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state_b = False'] = 'toggle_state_b = False';
 
    
   Blockly.Python.definitions_['def_toggle_b'] = 'def toggle_pin_b():\n    global toggle_state_b\n    toggle_state_b = not toggle_state_b';
   Blockly.Python.definitions_['def_hander_b'] = 'def toggle_interrupt_handler_b(pin):\n    if pin.value() == 0:\n        toggle_pin_b()';
   Blockly.Python.definitions_['buton_birq'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_b)\n';
    
    code = 'toggle_state_b';
    return [code, Blockly.Python.ORDER_NONE];
  };*/