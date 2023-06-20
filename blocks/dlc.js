Blockly.defineBlocksWithJsonArray([
    {
    "type": "stopMotor",
    "message0": "stopMotor",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "moveAward",
    "message0": "moveForward for  %1 sec at Speed  %2",
    "args0": [
      {
        "type": "field_number",
        "name": "moveAward",
        "value": 0
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
    "type": "moveBack",
    "message0": "moveBack for  %1 sec at Speed  %2",
    "args0": [
      {
        "type": "field_number",
        "name": "moveBack",
        "value": 0
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
    "type": "moveLeft",
    "message0": "moveLeft for  %1 sec at Speed  %2",
    "args0": [
      {
        "type": "field_number",
        "name": "moveLeft",
        "value": 0
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
    "type": "moveRight",
    "message0": "moveRight for  %1 sec at Speed  %2",
    "args0": [
      {
        "type": "field_number",
        "name": "moveRight",
        "value": 0
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
    "type": "Forward",
    "message0": "moveForward at Speed  %1",
    "args0": [
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
    "type": "Backward",
    "message0": "moveBackward at Speed  %1",
    "args0": [
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
    "type": "Left",
    "message0": "moveLeft at Speed  %1",
    "args0": [
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
    "type": "Right",
    "message0": "moveRight at Speed  %1",
    "args0": [
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
  //Motor End //////////////////////////////////
  
  //servo Start ////////////////////////////////
  {
    "type": "servo",
    "message0": "Servo pin %1 set angle %2 °",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#943126",
    "tooltip": "",
    "helpUrl": ""
  },
  //servo End //////////////////////////////////
  
  //OLED Start /////////////////////////////////
  
  {
    "type": "oled_init",
    "message0": "OLED initial with size %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "size",
        "options": [
          [
            "128x64",
            "0"
          ],
          [
            "128x32",
            "1"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
  },
  {
    "type": "oled_draw_text",
    "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
  },
  {
    "type": "oled_draw_line",
    "message0": "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "x1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
  },
  {
    "type": "oled_draw_rect",
    "message0": "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "fill",
        "options": [
          [
            "No",
            "0"
          ],
          [
            "Yes",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
    "tooltip": "Draw rectangle on OLED",
    "helpUrl": ""
  },
  {
    "type": "oled_fill",
    "message0": "OLED fill",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
    "tooltip": "Fill screen",
    "helpUrl": ""
  },
  {
    "type": "oled_clear",
    "message0": "OLED clear",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D68910",
    "tooltip": "clear screen",
    "helpUrl": ""
  },
  
  
  //OLED End ///////////////////////////////////
  
  //Buzzer Start ///////////////////////////////
  {
    "type": "buzzer1",
    "message0": "Buzzer pin %1 frequency %2 beep %3 seconds",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
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
    "message0": "Buzzer pin %1 frequency %2 beep",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
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
    "message0": "Buzzer pin %1 stop beep",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
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
])
