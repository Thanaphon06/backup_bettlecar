Blockly.Python['button'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
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
  Blockly.Python['buttonA_toggle'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    //Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    //Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
   //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
    
   Blockly.Python.definitions_['toggle_a'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
    //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
    Blockly.Python.definitions_['handerler_a'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
    
    Blockly.Python.definitions_['button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
    
    code = 'toggle_state';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['buttonB_toggle'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    //Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    //Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state_b = False'] = 'toggle_state_b = False';
   //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
    
   Blockly.Python.definitions_['def_toggle_b'] = 'def toggle_pin_b():\n    global toggle_state_b\n    toggle_state_b = not toggle_state_b';
    //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
    Blockly.Python.definitions_['def_handerler_b'] = 'def toggle_interrupt_handler_b(pin):\n    if pin.value() == 0:\n        toggle_pin()';
    
    Blockly.Python.definitions_['button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_b)\n';
    
    code = 'toggle_state_b';
    return [code, Blockly.Python.ORDER_NONE];
  };