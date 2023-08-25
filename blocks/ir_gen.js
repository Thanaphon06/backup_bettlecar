Blockly.Python['ir_get_sig'] = function(block) {
    
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

    var code = '#while True:\ncommand = beetlecar.read_ircode(beetlecar.ird)\nprint(command)\ntime.sleep(1)'
    return code;
  };
  