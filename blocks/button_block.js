
Blockly.Msg.buttonA_Msg = "SW_A";
Blockly.Msg.buttonB_Msg = "SW_B";

Blockly.defineBlocksWithJsonArray([
{
    
        "type":"switch",
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
        "type":"switch_toggle",
        "message0": "Switch: %1 is on ",
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
      /*{
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
      },*/

])