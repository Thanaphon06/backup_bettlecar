Blockly.Msg.happy = "Happy Birth Day";
Blockly.Msg.darth_vader = "Darth Vader theme";
Blockly.Msg.jingle_bell = "Jingle Bell";
Blockly.Msg.mary_little_lamb = "Mary had a little lamb";
Blockly.Msg.bitsy_spider  = "Bitsy Spider ";



Blockly.defineBlocksWithJsonArray([
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
          "colour": "#27AE60",
          "tooltip": "",
          "helpUrl": ""

    }])