Blockly.Python['buz_play_music'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

    
  

      var select_song = block.getFieldValue('music');

      code = '';;
      if(select_song == 1){
        code = `for i in beetlecar.happy_birthday:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
      }else if(select_song == 2){
        code = `for i in beetlecar.darth_vader:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.5)\n    sleep(0.1)\n`;
      }else if(select_song == 3){
        code = `for i in beetlecar.jingle_bell:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
      }else if(select_song == 4){
        code = `for i in beetlecar.mary_little_lamb:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
      }else if(select_song == 5){
        code = `for i in beetlecar.bitsy_spider:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
      }
      return code;
    };
  