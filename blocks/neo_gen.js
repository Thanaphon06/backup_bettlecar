Blockly.Python['neopixel_fill_color1'] = function(block) {
  Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
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
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
    
    var code = `for i in range(np.n): np[i] = (0,0,0)\nnp.write()\n`;
    return code;
  };
  Blockly.Python['neopixel_toggle'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
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
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
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
  