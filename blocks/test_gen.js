Blockly.Python['servo_new1'] = function(block) { //ชื่อที่เราตั้งไว้
    Blockly.Python.definitions_['from_machine_import_pin'] = 'import test'; //ส่วน import
    
    var value_pin = block.getFieldValue('pin');//เรียกค่าจาก %1
    var value_angle = block.getFieldValue('angle');//เรียกค่า %2
    
    var code = ``; //ส่วนโค๊ดbeetlecar.servo(${value_pin}, ${value_angle})\n
    if (value_pin == '17') {
      code = `beetlecar.servo_LiftUp(${value_angle})\n`
      if(value_angle >= 90){
        code = `beetlecar.servo_LiftUp(90)\n`
      }
      if(value_angle <= 0){
        code = `beetlecar.servo_LiftUp(0)\n`
      }
    }
    else if(value_pin == '16'){
      code = `beetlecar.servo_Clamp(${value_angle})\n`
      if(value_angle >= 90){
        code = `beetlecar.servo_Clamp(90)\n`
      }
      if(value_angle <= 0){
        code = `beetlecar.servo_Clamp(0)\n`
      }
    }
    
    return code;
  };