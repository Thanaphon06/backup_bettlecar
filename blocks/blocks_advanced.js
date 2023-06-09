Blockly.Msg.LED_LIFT_Msg = "Left";
Blockly.Msg.LED_RIGHT_Msg = "Right";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.buttonA_Msg = "Button_A";
Blockly.Msg.buttonB_Msg = "Button_B";


Blockly.defineBlocksWithJsonArray([
{
  "type": "dht_read",
  "message0": "%1 pin %2 read %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "DHT11",
          "11"
        ],
        [
          "DHT22",
          "22"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "valueIndex",
      "options": [
        [
          "temperature",
          "0"
        ],
        [
          "humidity",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds18x20_read",
  "message0": "DS18x20 pin %1 read temperature",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
//-------------------------------------
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
//-----------------------------------------^
},
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
{
  "type": "neopixel_fill_color1",
  "message0": "NeoPixel on color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},/////////////////////////////////////
/*{
  "type": "led_full",
  "message0": "LED %1 is %2",
  "args0":[
    {
      "type": "field_dropdown",
      "name": "side_led",
      "options": [
                  [Blockly.Msg.LED_LIFT_Msg , "1"],
                  [Blockly.Msg.LED_RIGHT_Msg , "2"]
                ]
    },
    {
      "type": "field_dropdown",
      "name": "isonoff",
      "options": [
                  [Blockly.Msg.On_Msg , "1"],
                  [Blockly.Msg.OFF_Msg , "0"]
                ]
    },
  ]
},
{
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "#27AE60",
"tooltip": "",
"helpUrl": ""
},*/

]);