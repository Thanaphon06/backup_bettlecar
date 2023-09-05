Blockly.defineBlocksWithJsonArray([
    

      {
        "type": "servo_new1", //ชื่อ
        "message0": "Servo %1 Set Angle %2", //ข้อความที่ขึ้นบนบล็อก %1 %2 คือช่องที่ให้ผู้ใช้ใส่ข้อมูล
        "args0": [
          {
            //%1
            "type": "field_dropdown", //ระบุประเภท อันนี้คือ dropdown
            "name": "pin", //ตั้งชื่อ
            "options": [
              [
                "Lift Up/Lift Down (S2)",//ข้อความตัวเลือก
                "17"//ค่าที่ส่งไปให้ตัว Generators
              ],
              [
                "Clamp (S1)",//ข้อความตัวเลือกที่2
                "16"//ค่าที่ส่งไปให้ตัว Generators
              ]
            ]
          },
          {
            //%2
            "type": "field_angle",//ระบุประเภท
            "name": "angle",//ตั้งชื่อ
            "angle": 90, //ตั้งค่ามุม
            "min": 0,     // Minimum angle
            "max": 90     // Maximum angle
          }
        ],
        
      //"inputsInline": true, //ใช้สำหรับเป็นตัวเงื่อนไข ไว้ต่อ if else
      "previousStatement": null,//กำหนดให้บล็อกสามารถต่อจากข้างบน
      "nextStatement": null,//กำหนดให้บล็อกสามารถต่อจากข้างล่าง
      "colour": "#1E8449",//สี
      "tooltip": "",
      "helpUrl": ""
      },
])