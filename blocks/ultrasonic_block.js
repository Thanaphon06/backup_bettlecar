Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";

Blockly.defineBlocksWithJsonArray([
    {  
    "type": "ultra_read",
    "message0": "Ultrasonic read  %1 %2 Centimeter",
    "args0":[
    {
      "type": "field_dropdown",
      "name": "math",
      "options": [
        [Blockly.Msg.mt_sigh , ">="],
        [Blockly.Msg.lt_sigh , "<="],
        [Blockly.Msg.eq_sigh , "=="]
      ]
    
    },
    {
      "type": "input_value",
      "name": "read_num",
      "check": "Number"
    }
  ], 
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  //-----------------------------------------^
  },
])
  