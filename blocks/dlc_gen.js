  //Motor Strat //////////////////////////

  Blockly.Python['stopMotor'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var code = '...';
    var code = 'stopMotor()\n';
    var functionName = Blockly.Python.provideFunction_(
      'stopMotor',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      '  LMotor.off()',
      '  pwm1.duty(0)',
      '  RMotor.off()',   
      '  pwm2.duty(0)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',
      '  RMotor2.off()',
      '  pwm4.duty(0)']);
    return code;
  };

Blockly.Python['moveAward'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var moveAward = block.getFieldValue('moveAward');
  var speed = block.getFieldValue('speed');
  var code = `moveAward(${moveAward}, ${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'moveAward',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',
    '  RMotor2.off()',
    '  pwm4.duty(0)',
    '  time.sleep(duration)']);
  return code;
};

Blockly.Python['moveBack'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
  var moveBack = block.getFieldValue('moveBack');
  var speed = block.getFieldValue('speed');
  var code = `moveBack(${moveBack}, ${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'moveBack',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.on()',
    '  pwm3.duty(speed)',
    '  RMotor2.on()',
    '  pwm4.duty(speed)',
    '  time.sleep(duration)']);
  return code;
};

Blockly.Python['moveLeft'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
  var moveLeft = block.getFieldValue('moveLeft');
  var speed = block.getFieldValue('speed');
  var code = `moveLeft(${moveLeft}, ${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'moveLeft',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)',
    '  time.sleep(duration)']);
  return code;
};

Blockly.Python['moveRight'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
  var moveLeft = block.getFieldValue('moveRight');
  var speed = block.getFieldValue('speed');
  var code = `moveRight(${moveLeft}, ${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'moveRight',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)',
    '  time.sleep(duration)']);
  return code;
};

Blockly.Python['Forward'] = function(block) {
Blockly.Python.definitions_['import_machine'] = 'import machine';
Blockly.Python.definitions_['import_time'] = 'import time';
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

var speed = block.getFieldValue('speed');
var code = `Forward(${speed})\n`;
var functionName = Blockly.Python.provideFunction_(
  'Forward',
  ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
  '  LMotor.on()',
  '  pwm1.duty(speed)',
  '  RMotor.on()',
  '  pwm2.duty(speed)',
  '  LMotor2.off()',
  '  pwm3.duty(0)',
  '  RMotor2.off()',
  '  pwm4.duty(0)']);
return code;
};

Blockly.Python['Backward'] = function(block) {
Blockly.Python.definitions_['import_machine'] = 'import machine';
Blockly.Python.definitions_['import_time'] = 'import time';
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

var speed = block.getFieldValue('speed');
var code = `Backward(${speed})\n`;
var functionName = Blockly.Python.provideFunction_(
  'Backward',
  ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
  '  LMotor.off()',
  '  pwm1.duty(0)',
  '  RMotor.off()',
  '  pwm2.duty(0)',
  '  LMotor2.on()',
  '  pwm3.duty(speed)',
  '  RMotor2.on()',
  '  pwm4.duty(speed)']);
return code;
};

Blockly.Python['Left'] = function(block) {
Blockly.Python.definitions_['import_machine'] = 'import machine';
Blockly.Python.definitions_['import_time'] = 'import time';
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

var speed = block.getFieldValue('speed');
var code = `Left(${speed})\n`;
var functionName = Blockly.Python.provideFunction_(
  'Left',
  ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
  '  LMotor.off()',
  '  pwm1.duty(0)',
  '  RMotor.on()',
  '  pwm2.duty(speed)',
  '  LMotor2.off()',
  '  pwm3.duty(0)',  
  '  RMotor2.off()',
  '  pwm4.duty(0)']);
return code;
};

Blockly.Python['Right'] = function(block) {
Blockly.Python.definitions_['import_machine'] = 'import machine';
Blockly.Python.definitions_['import_time'] = 'import time';
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

var speed = block.getFieldValue('speed');
var code = `Right(${speed})\n`;
var functionName = Blockly.Python.provideFunction_(
  'Right',
  ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
  '  LMotor.on()',
  '  pwm1.duty(speed)',
  '  RMotor.off()',
  '  pwm2.duty(0)',
  '  LMotor2.off()',
  '  pwm3.duty(0)',  
  '  RMotor2.off()',
  '  pwm4.duty(0)']);
return code;
};
//Motor End ///////////////////////////////////

// servo Start ////////////////////////////////
Blockly.Python['servo'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
  return code;
};
// servo End //////////////////////////////////

//OLED Start //////////////////////////////////
Blockly.Python['oled_init'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var dropdown_size = block.getFieldValue('size');

var code = `oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
return code;
};

Blockly.Python['oled_draw_text'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

var code = `oled.text(${value_text}, ${value_x}, ${value_y}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_draw_line'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_draw_rect'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
var dropdown_fill = block.getFieldValue('fill');

var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_fill'] = function(block) {
var code = 'oled.fill(1); oled.show()\n';
return code;
};

Blockly.Python['oled_clear'] = function(block) {
var code = 'oled.fill(0); oled.show()\n';
return code;
};
//OLED END ////////////////////////////////////

// buzzer Start ///////////////////////////////
function buzzerWriteFunction() {
let board = boards.find(board => board.id === boardId);

const _duty = board?.chip === "RP2" ? "duty_u16" : "duty";
const _max_duty = board?.chip === "RP2" ? "65535" : "1023";

return Blockly.Python.provideFunction_(
  'buzzerWrite',
  ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin, freq=1000, duty=50, stop=0):',
  '  pwm = PWM(Pin(pin))',
  '  pwm.freq(freq)',
  '  pwm.' + _duty + '(int(duty / 100 * ' + _max_duty + '))',
  '  if stop > 0:',
  '    sleep(stop)',
  '    pwm.' + _duty + '(0)'
]);
}
Blockly.Python['buzzer1'] = function(block) {
Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
return code;
};

Blockly.Python['buzzer2'] = function(block) {
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq})\n`;
return code;
};

Blockly.Python['buzzer3'] = function(block) {
Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var code = `${buzzerWriteFunction()}(${value_pin}, duty=0)\n`;
return code;
};
// buzzer End /////////////////////////////////