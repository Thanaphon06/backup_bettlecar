Blockly.Python['neopixel_fill_color1'] = function(block) {
  //Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    //Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    /*Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
    var colour_color = block.getFieldValue('color');
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
    var red = parseInt(result[1], 16);
    var green = parseInt(result[2], 16);
    var blue = parseInt(result[3], 16);
  
    var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (${red},${green}, ${blue})\nbeetlecar.neo_on()\n`;
    return code;
  };
  Blockly.Python['neopixel_off'] = function(block) {

    /*Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

    
    var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (0,0,0)\nbeetlecar.neo_on()\n`;
    return code;
  };
  Blockly.Python['neopixel_toggle'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    Blockly.Python.definitions_['import_time'] = 'import time';
    /*Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   */
    Blockly.Python.definitions_['neo_toggle_state'] = 'np_toggle = False';   
    
    //Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
    

    
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
      `neo_tog`,
      [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
      `  global np_toggle`,
      `  np_toggle = not np_toggle`,
      `  if np_toggle:`,
      `      for i in range(beetlecar.np.n):`,
      `          beetlecar.np[i] = (${red}, ${green}, ${blue})`,
      `          time.sleep(0.1) `,
      `  else:`,
      `      beetlecar.np.fill((${red2}, ${green2}, ${blue2}))`,
      `      time.sleep(0.1)`,
      `  beetlecar.neo_on()`]);
  
    var code = '#while True:\nneo_tog()\n'
    //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
    return code;
  };
  Blockly.Python['rainbow_neo'] = function(block) {
    /*Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
    Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
    
  
    var code = 'beetlecar.rainbow_neo()\n'
    //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
    return code;
  };
  