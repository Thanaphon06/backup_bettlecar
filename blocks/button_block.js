Blockly.Msg.LED_LIFT_Msg = "Left";
Blockly.Msg.LED_RIGHT_Msg = "Right";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.buttonA_Msg = "Button_A";
Blockly.Msg.buttonB_Msg = "Button_B";

//sigh
Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";

Blockly.defineBlocksWithJsonArray([
{
    
        "type":"button",
        "message0": "Button: %1 is put",
        "args0":[
          {
            "type" : "field_dropdown",
            "name" : "pin",
            "options" : [
              [
                Blockly.Msg.buttonA_Msg , "18"
              ],
              [
                Blockly.Msg.buttonB_Msg , "5"
              ]
            ]
          }
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#27AE60",
      "tooltip": "",
      "helpUrl": ""
      
      },
      {
        "type":"buttonA_toggle",
        "message0": "Switch: %1 is on ",
        "args0":[
          {
            "type" : "field_dropdown",
            "name" : "pin",
            "options" : [
              [
                Blockly.Msg.buttonA_Msg , "18"
              ]
            ]
          }
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#27AE60",
      "tooltip": "",
      "helpUrl": ""
      },
      {
        "type":"buttonB_toggle",
        "message0": "Switch: %1 is on ",
        "args0":[
          {
            "type" : "field_dropdown",
            "name" : "pin",
            "options" : [
              [
                Blockly.Msg.buttonB_Msg , "5"
              ]
            ]
          }
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#27AE60",
      "tooltip": "",
      "helpUrl": ""
      },///////////////////////////////////////////

])