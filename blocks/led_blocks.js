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
            "type": "led_onoff",
            "message0": "LED pin : %1 is : %2",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                [Blockly.Msg.LED_LIFT_Msg , "1"],
                [Blockly.Msg.LED_RIGHT_Msg , "2"]
              ]
                
            },
            {
              "type": "input_value",
              "name": "onoff",
              "check": "Number"
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#27AE60",
          "tooltip": "",
          "helpUrl": ""
          },

])