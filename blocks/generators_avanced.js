Blockly.Python['dht_read'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_dht'] = 'import dht';

  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
    '    return [ d.temperature(), d.humidity() ]',
    '  except:',
    '    print("DHT read error")',
    '    return [ -999, -999 ]']);

    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var code = `${functionName}(${dropdown_type}, ${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ds18x20_read'] = function(block) {
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
  
    var functionName = Blockly.Python.provideFunction_(
      'DS18x20_Read',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
      '  ds = ds18x20.DS18X20(onewire.OneWire(Pin(pin)))',
      '  roms = ds.scan()',
      '  try:',
      '    ds.convert_temp()',
      '  except:',
      '    return 0',
      '  sleep(0.75)',
      '  for rom in roms:',
      '    return ds.read_temp(rom)',
      '  return 0']);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
};
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
  
 Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
  //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
  Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
  
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
  Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
 //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
  
 Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
  //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
  Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
  
  Blockly.Python.definitions_['button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
  
  code = 'toggle_state';
  return [code, Blockly.Python.ORDER_NONE];
};//////////////////////////////////////
Blockly.Python['neopixel_fill_color1'] = function(block) {
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
  return code;
};
Blockly.Python['neopixel_off'] = function(block) {
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var code = `for i in range(np.n): np[i] = (0,0,0)\nnp.write()\n`;
  return code;
};
Blockly.Python['neopixel_toggle'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  Blockly.Python.definitions_['toggle_state'] = 'toggle_state = False';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var tog_colors1 = block.getFieldValue('tog_color1');
  var tog_colors2 = block.getFieldValue('tog_color2');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors1);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors2);
  var red2 = parseInt(result2[1], 16);
  var green2 = parseInt(result2[2], 16);
  var blue2 = parseInt(result2[3], 16);

 
  var functionName = Blockly.Python.provideFunction_(
    `toggle_light`,
    [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
    `  global toggle_state`,
    `  toggle_state = not toggle_state`,
    `  if toggle_state:`,   
    `      for i in range(np.n):`,
    `          np[i] = (${red}, ${green}, ${blue})`,
    `          time.sleep(0.1) `,
    `  else:`,
    `      np.fill((${red2}, ${green2}, ${blue2}))`,
    `      time.sleep(0.1)`,
    `  np.write()`]);

  var code = 'toggle_light()\n'
  //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
  return code;
};
Blockly.Python['rainbow_neo'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var functionName = Blockly.Python.provideFunction_(
    `rainbow_neo`,
    [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
    `  for j in range(256):`,
    `        for i in range(np.n):`,
    `            WheelPos = (i * 1 + j) % 256`,   
    `            if WheelPos < 85:`,
    `                np[i] = (int(WheelPos * 3), int(255 - WheelPos * 3), 0)`,
    `            elif WheelPos < 170:`,
    `                WheelPos -= 85`,
    `                np[i] = (int(255 - WheelPos * 3), 0, int(WheelPos * 3))`,
    `            else:`,
    `                WheelPos -= 170`,
    `                np[i] = (0, int(WheelPos * 3), int(255 - WheelPos * 3))`,
    `        np.write()`,
    `        sleep_ms(5)`,]);

  var code = 'rainbow_neo()\n'
  //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
  return code;
};

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
////////////////////////////////////////
/*Blockly.Python['led_full'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
  
  var led_isSide = block.getFieldValue('side_led');
  var led_isOnOff = block.getFieldValue('isonoff');
  code = '';;
  if(led_isSide == 1 && led_isOnOff == 1){
    code = `Pin(33, Pin.OUT).value(1)\n`;
  }else if(led_isSide == 1 && led_isOnOff == 0){
    code = `Pin(33, Pin.OUT).value(0)\n`;
  }else if(led_isSide == 2 && led_isOnOff == 1){
    code = `Pin(12, Pin.OUT).value(1)\n`;
  }else if(led_isSide == 2 && led_isOnOff == 0){
    code = `Pin(12, Pin.OUT).value(0)\n`;
  }
  return code;
};
*/
/*
Blockly.Python['pin_digital_write'] = function (block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var code = `Pin(${dropdown_pin}, Pin.OUT).value(${value_value})\n`;
  return code;
};
*/