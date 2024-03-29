Blockly.Msg.buttonA_Msg = "SW_A";
Blockly.Msg.buttonB_Msg = "SW_B";
Blockly.Msg.LED_LIFT_Msg = "Left ON";
Blockly.Msg.LED_RIGHT_Msg = "Right ON";
Blockly.Msg.LEFT_OFF = "Left OFF";
Blockly.Msg.RIGHT_OFF = "Right OFF";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";
Blockly.Msg.happy = "Happy Birth Day";
Blockly.Msg.darth_vader = "Darth Vader theme";
Blockly.Msg.jingle_bell = "Jingle Bell";
Blockly.Msg.mary_little_lamb = "Mary had a little lamb";
Blockly.Msg.bitsy_spider  = "Bitsy Spider ";

Blockly.Msg.but1 = "1";
Blockly.Msg.but2 = "2";
Blockly.Msg.but3 = "3";
Blockly.Msg.but4 = "4";
Blockly.Msg.but5 = "5";
Blockly.Msg.but6 = "6";
Blockly.Msg.but7 = "7";
Blockly.Msg.but8 = "8";
Blockly.Msg.but9 = "9";
Blockly.Msg.but0 = "0";
Blockly.Msg.buttag = "#";
Blockly.Msg.butstar = "*";
Blockly.Msg.butup = "Up";
Blockly.Msg.butdown = "Down";
Blockly.Msg.butleft = "Left";
Blockly.Msg.butright = "Right";
Blockly.Msg.butokay = "Ok";



Blockly.defineBlocksWithJsonArray([
{
 
//Motor Start //////////////////////////////

  "type": "stopMotor",
  "message0": "StopMotor",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},

//Motor End //////////////////////////////////

//servo Start ////////////////////////////////
{
  "type": "servo",
  "message0": "Servo %1 Set Angle %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "LiftUp/LiftDown",
          "17"
        ],
        [
          "Clamp",
          "16"
        ]
      ]
    },
    {
      "type": "field_angle",
      "name": "angle",
      "angle": 90
    }
  ],
  
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "#1E8449",
"tooltip": "",
"helpUrl": ""
},
//servo End //////////////////////////////////



//Buzzer Start ///////////////////////////////
{
    "type": "buzzer1",
    "message0": "Buzzer frequency %1 beep %2 seconds",
    "args0": [
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "time",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D35400",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "buzzer2",
    "message0": "Buzzer %1 frequency beep",
    "args0": [
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D35400",
    "tooltip": "",
    "helpUrl": ""
  },
  
  {
    "type": "buzzer3",
    "message0": "Buzzer stop beep",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D35400",
    "tooltip": "",
    "helpUrl": ""
  },
    {
        "type": "buz_play_music",
            "message0": "Play Music🎵 : %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "music",
              "options": [
                [Blockly.Msg.happy , "1"],
                [Blockly.Msg.darth_vader , "2"],
                [Blockly.Msg.jingle_bell , "3"],                
                [Blockly.Msg.mary_little_lamb , "4"],
                [Blockly.Msg.bitsy_spider , "5"]
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#D35400",
          "tooltip": "",
          "helpUrl": ""

    },
//Buzzer End /////////////////////////////////

//LED Start //////////////////////////////////
{        
  "type": "led_onoff",
            "message0": "LED: %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                [Blockly.Msg.LED_LIFT_Msg , "1"],
                [Blockly.Msg.LEFT_OFF , "2"],
                [Blockly.Msg.LED_RIGHT_Msg , "3"],                
                [Blockly.Msg.RIGHT_OFF , "4"]
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#0aa83c",
          "tooltip": "",
          "helpUrl": ""
          
},
//LED End ////////////////////////////////////

//Ultrasonic Start ///////////////////////////
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
    "type": "field_number",
    "name": "read_num",
    "check": "Number"
  }
], 
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
//-----------------------------------------^
},

//Ultrasonic End /////////////////////////////

//neopixel Start /////////////////////////////
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
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },/////////////////////////////////////
      {
        "type": "neopixel_toggle",
        "message0": "NeoPixel toggle color %1 : %2",
        "args0": [
          {
            "type": "field_colour",
            "name": "tog_color1",
            "colour": "#ff0000"
          },
          {
            "type": "field_colour",
            "name": "tog_color2",
            "colour": "0000ff"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rainbow_neo",
        "message0": "NeoPixel rainbow",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "neopixel_off",
        "message0": "NeoPixel Off",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
//neopixel End ///////////////////////////////

//button Start ///////////////////////////////

  {
    
    "type":"switch",
        "message0": "Switch: %1 is put",
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
      "colour": "#9400d3",
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
      "colour": "#9400d3",
      "tooltip": "",
      "helpUrl": ""
      },
      
 

//button End /////////////////////////////////

//
 //BLUE_START
 { 
    "type": "blue_con",
    "message0": "Bluetooth ON",
    "inputsInline": true,
    //"previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  },
 
  {
    "type": "blue_command",
    "message0": "Typing command is : %1",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
    ],
    "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
  },
  {
    "type": "blue_msg",
    "message0": "Bluetooth massage : %1",
    "args0": [
      {
        "type": "input_value",
        "name": "text_blue"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "	#3498DB",
    "tooltip": "",
    "helpUrl": ""
  },
  //BLUE_END
//IR_START
{ 
    "type": "ir_get_sig",
    "message0": "Read IR signal",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": " #D01400",
    "tooltip": "",
    "helpUrl": ""
  },
 {
  "type":"ir_com",
  "message0": "IR Signal = %1",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "ir_but",
      "options" : [
        [
          Blockly.Msg.but1, "1"
        ],
        [
          Blockly.Msg.but2 , "2"
        ],
        [
          Blockly.Msg.but3 , "3"
        ],
        [
          Blockly.Msg.but4 , "4"
        ],
        [
          Blockly.Msg.but5 , "5"
        ],
        [
          Blockly.Msg.but6 , "6"
        ],
        [
          Blockly.Msg.but7 , "7"
        ],
        [
          Blockly.Msg.but8 , "8"
        ],
        [
          Blockly.Msg.but9 , "9"
        ],
        [
          Blockly.Msg.but0 , "0"
        ],
        [
          Blockly.Msg.buttag , "#"
        ],
        [
          Blockly.Msg.butstar , "*"
        ],
        [
          Blockly.Msg.butup , "Up"
        ],
        [
          Blockly.Msg.butdown , "Down"
        ],
        [
          Blockly.Msg.butleft , "Left"
        ],
        [
          Blockly.Msg.butright , "Right"
        ],
        [
          Blockly.Msg.butokay , "Ok"
        ],
        

      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#D01400",
"tooltip": "",
"helpUrl": ""

},
  //IR_END
 //Line tracking STATE
  {
    "type": "linetracking_pin",
    "message0": "Line Tracking sensor read pin1:  %1 pin2: %2 pin3: %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sensor1",
        "options": [
          [
            "SS1",
            "36"
          ],
          [
            "SS2",
            "39"
          ],
          [
            "SS3",
            "34"
          ],
          [
            "SS4",
            "35"
          ],
          [
            "SS5",
            "13"
          ],
          [
            "None",
            "None"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sensor2",
        "options": [
          [
            "SS1",
            "36"
          ],
          [
            "SS2",
            "39"
          ],
          [
            "SS3",
            "34"
          ],
          [
            "SS4",
            "35"
          ],
          [
            "SS5",
            "13"
          ],
          [
            "None",
            "None"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sensor3",
        "options": [
          [
            "SS1",
            "36"
          ],
          [
            "SS2",
            "39"
          ],
          [
            "SS3",
            "34"
          ],
          [
            "SS4",
            "35"
          ],
          [
            "SS5",
            "13"
          ],
          [
            "None",
            "None"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "linetracking_sensor",
    "message0": "read %1 %2 threshold",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sensor",
        "options": [
          [
            "sensor1",
            "sensor1_value"
          ],
          [
            "sensor2",
            "sensor2_value"
          ],
          [
            "sensor3",
            "sensor3_value"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "operator",
        "options": [
          [
            "=",
            "=="
          ],
          [
            ">",
            ">"
          ],
          [
            "<",
            "<"
          ],
          [
            ">=",
            ">="
          ],
          [
            "<=",
            "<="
          ]
        ]
      }
    ],
    "output": null,
    "colour": "#D68910",
    "tooltip": "",
    "helpUrl": ""
  },
   {
    "type": "motor_control",
    "message0": "motor %1 move %2 at speed  %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "mcontrol",
        "options": [
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "move",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "speed",
        "options": [
          [
            "50%",
            "512"
          ],
          [
            "75%",
            "768"
          ],
          [
            "100%",
            "1023"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "motor_control",
    "message0": "motor %1 move %2 at speed  %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "mcontrol",
        "options": [
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "move",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "speed",
        "options": [
          [
            "50%",
            "512"
          ],
          [
            "75%",
            "768"
          ],
          [
            "100%",
            "1023"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "motor_control0",
    "message0": "motor %1 move at speed %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "motor_control0",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "speed",
        "options": [
          [
            "50%",
            "512"
          ],
          [
            "75%",
            "767"
          ],
          [
            "100%",
            "1023"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "motor_control1",
    "message0": "motor %1 move at speed %2 for %3 sec",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "motor_control1",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "speed",
        "options": [
          [
            "50%",
            "512"
          ],
          [
            "75%",
            "767"
          ],
          [
            "100%",
            "1023"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "time",
        "value": 0
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },
 
        
   {
    "type": "motor_control2",
    "message0": "motor move %1 at speed %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "motor_control2",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "speed",
        "value": 0,
        "min": 0,
        "max": 1023
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },
]);