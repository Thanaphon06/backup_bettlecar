addBoard({
    id: "esp32-dev-board",
    name: "ESP32 Dev Board",
    description: "",
    image: "images/beetlecar.png",
    chip: "ESP32",
    script: [ 
        
    ],
    css: [
        
    ],
    blocks: [
        "blocks/blocks_pin.js",
        "blocks/blocks_advanced.js",

        "blocks/generators_pin.js",
        "blocks/generators_advanced.js",
        
        "blocks/beetlecar_blocks.js",
        "blocks/beetlecar_gen.js",
        //"blocks/test_blocks.js",
        //"blocks/test_gen.js"

    ],
    modules: [
     ],
    firmware: [
        {
            name: "MicroPython for ESP32 Dev Board V1.6.0",
            path: "firmware/MicroPython.for.ESP32.Dev.Board.V1.6.0.bin",
            version: "V1.6.0",
            date: "2021-1-30",
            board: "ESP32 Dev Board",
            cpu: "ESP32"
        }
    ],
    examples: [
        "Switch",
        {
            name: "ON OFF Switch",
            files: "examples/button_on",
        },
        {
            name: "Toggle Switch",
            files: "examples/toggle_sw",
        },
        "Ultrasonic",
        {
            name: "Ultrasonic",
            files: "examples/ultrasonic_neo",
        },
        /*"BlueTooth",
        {
            name: "Bluetooth Command",
            files: "examples/bluetooth_ex",
        },
        "IR_Signal",
        {
            name: "Read IR Signal",
            files: "examples/read_ir",
        },
        {
            name: "IR Command",
            files: "examples/ir_remote",
        },*/
        "Line Tracking",
        {
            name: "Line Tracking",
            files: "examples/linetracking2.0",
        },
        "Line Tracking",
        {
            name: "Buzzer Beep",
            files: "examples/buzzer_beep",
        },
        {
            name: "Buzzer Play Song",
            files: "examples/buzzer_song",
        },
        
        "Neopixel",
        {
            name: "Rainbow Neopixel",
            files: "examples/neo_rainbow",
        },
        "Motor",
       {
            name: "Motor",
            files: "examples/motor_ex",
        },
        "Servo",
        {
            name: "Servo Clamp Object 1",
            files: "examples/servo_ex",
        },
        ///{
        ///    name: "Servo Hold Object",
        ///    files: "examples/HBD_car",
       /// },
       


    ],
    usb: [
        { // CP2104
            vendorId: "10C4",
            productId: "EA60"
        }
    ],
    autoCompletion: { },
    level: [
        {
            name: "Beginner",
            description: "",
            icon: "../kidbright32/images/puzzle.png",
            blocks: [
                {
                   
                    
                    name: "Beetle Car",
                    icon: "images/beetlecar.png",
                    color: "#e64c3c",
                    blocks: [
                        {
                            xml: '<label text="Beetlecar"></label>'
                            
                        },
                        {
                            xml: '<label text="Motor"></label>'
                            
                        },
                                                //////////// MOTOR 2.0 ///////////////
                                                {
                                                    xml: `
                                                    <block type="new_motor">
                                                        <field name="move">0</field>
                                                        <field name="speed">180</field>
                                                    </block>
                                                `
                                                },
                                                {
                                                    xml: `
                                                    <block type="new_motor2">
                                                        <field name="move">0</field>
                                                        <field name="speed">180</field>
                                                        <field name="time">0</field>
                                                    </block>
                                                `
                                                },
                                                {
                                                    xml: `
                                                    <block type="new_motor3">
                                                        <field name="motor">0</field>
                                                        <field name="move">0</field>
                                                        <field name="speed">200</field>
                                                    </block>
                                                `
                                                },
                                                "newstopMotor",
                                                {
                                                    xml: '<label text="Ultrasonic"></label>'
                                                },
                        
                                                //Ultrasonic Start ////////////////////////////
                                                {
                                                    xml:`    
                                                        <block type="ultra_read">
                                                            <value name="math">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">>=</field>
                                                                </shadow>
                                                            </value>
                                                            <value name="read_num">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">5</field>
                                                                </shadow>
                                                            </value>
                                                        </block>`
                                                },
                                                {
                                                    xml: '<label text="Switch"></label>',
                                                },
                                                {
                                                    xml:`
                                                        <block type = "switch">
                                                            <value name = "pin">
                                                                <shadow type = "math_number">
                                                                    <field name = "NUM">SW A</field>
                                                                </shadow>
                                                            </value>
                                                        </block>
                                                    `
                                                },
                                                {
                                                    xml: '<label text="Toggle Switch"></label>',
                                                },
                                                {
                                                    xml:`
                                                        <block type = "switch_toggle">
                                                            <value name = "pin">
                                                                <shadow type = "math_number">
                                                                    <field name = "NUM">SW A</field>
                                                                </shadow>
                                                            </value>
                                                        </block>
                                                    `
                                                },
                                                //Ultrasonic End ///////////////////////////////
                        //Motor End /////////////////////////////////
                        
        
                        /*Line tracking END
                        {
                            xml: '<label text="OLED"></label>', 
                        },

                        OLED Strat
                         
                        "oled_init",
                        {
                            xml: `
                                <block type="oled_draw_text">
                                    <value name="text">
                                        <shadow type="text">
                                            <field name="TEXT">Hello World!</field>
                                        </shadow>
                                    </value>
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="oled_draw_line">
                                    <value name="x1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="x2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="y2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="oled_draw_rect">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="width">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="height">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "oled_fill",
                        "oled_clear",
                        OLED End *///////////////////////////////////

                       

                        {
                            xml: '<label text="Servo"></label>', 
                        },

                        //servo Start////////////////////////////////
                        {
                            xml: `
                                <block type="servo">  
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">16</field>
                                        </shadow>
                                    </value>
                                    <value name="angle">
                                        <shadow type="math_number">
                                            <field name="NUM">90</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        
                        
                        //servo End //////////////////////////////////

                        {
                            xml: '<label text="LED"></label>'
                        },

                         //LED Start //////////////////////////////////
                       /* {
                            xml: `
                            <block type="led_onoff">
                                <value name="pin_trig">
                                    <shadow type="math_number">
                                        <field name="NUM">Left ON</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                        },*/
                        {
                            xml: `
                            <block type="led_left">
                                <value name="pin_trig">
                                    <shadow type="math_number">
                                        <field name="NUM">Left ON</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                        },
                        {
                            xml: `
                            <block type="led_right">
                                <value name="pin_trig">
                                    <shadow type="math_number">
                                        <field name="NUM">Right ON</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                        },
                        
                       
                        

                        {
                            xml:'<label text="NeoPixel"></label>'
                        },

                        //NeoPixel  Start //////////////////////////////
                        
                            "neopixel_fill_color1",
                            "neopixel_off",
                            "neopixel_toggle",
                            "rainbow_neo",
                          
                        
                        
                        //Toggle_Button  Start ////////////////////////////////
                        {
                            xml: '<label text="Buzzer"></label>', 
                        },

                         
                        {
                            xml: `
                                <block type="buzzer1">
                                    <value name="freq">
                                        <shadow type="math_number">
                                            <field name="NUM">1000</field>
                                        </shadow>
                                    </value>
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="buzzer2">
                                    <value name="freq">
                                        <shadow type="math_number">
                                            <field name="NUM">1000</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                            "buzzer3",
                    {
                        xml: `
                            <block type="buz_play_music">
                                <value name="music">
                                    <shadow type="math_number">
                                        <field name="NUM">Happy Birth Day</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                        //Buzzer End /////////////////////////////////
                        //Line tracking start
                       {
                        xml: '<label text="Line Tracking"></label>'
                    },
                    {
                        xml: `
                            <block type="linetracking_threshold">
                                <field name="black">0</field>
                                <field name="white">0</field>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="linetracking_sensor">
                                <field name="sensor">0</field>
                                <field name="operator">0</field>
                            </block>
                        `
                    },
                        /*{
                            xml: '<label text="Bluetooth"></label>',
                        },
                        {
                            xml:`
                                <block type = "blue_con">
                                    <value name = "blue_name">
                                        <shadow type = "text">
                                            <field name = "text">Beetlecar1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
            
                        {
                            xml:`
                                <block type = "blue_command">
                                    <value name = "text">
                                        <shadow type = "text">
                                            <field name = "text">Hello world</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml:`
                                <block type = "blue_msg">
                                    <value name = "text_blue">
                                        <shadow type = "text">
                                            <field name = "text">Hello world</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        
                        {
                            xml: '<label text="IR Signal"></label>',
                        },
                    "ir_get_sig",
                        {
                            xml:`
                                <block type = "ir_com">
                                    <value name = "ir_but">
                                        <shadow type = "math_number">
                                            <field name = "NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },*/
                    ]
                },
                {
                    name: "Basic",
                    icon: "/images/icon/led.png",
                    color: "#e64c3c",
                    blocks: [
                        "controls_forever",
                        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_analog_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1023</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_analog_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Blink Code"></label>',
                        },
                        {
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="pin_digital_write">
                                            <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                            </value>
                                            <value name="pin">
                                                <shadow type="math_number">
                                                    <field name="NUM">5</field>
                                                </shadow>
                                            </value>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                        </shadow>
                                                    </value>
                                                    <next>
                                                        <block type="pin_digital_write">
                                                            <value name="value">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">0</field>
                                                                </shadow>
                                                            </value>
                                                            <value name="pin">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">5</field>
                                                                </shadow>
                                                            </value>
                                                            <next>
                                                                <block type="controls_wait">
                                                                    <value name="time">
                                                                        <shadow type="math_number">
                                                                            <field name="NUM">1</field>
                                                                        </shadow>
                                                                    </value>
                                                                </block>
                                                            </next>
                                                        </block>
                                                    </next>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        },
                        
                    ]
                },
                {
                    name: "Control",
                    icon: `/images/icon/process.png`,
                    color: "#fbbd5e",
                    blocks: [
                        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "controls_forever",
                        {
                            xml: `
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="controls_for">
                                    <field name="VAR">i</field>
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="BY">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                          `
                        },
                        "controls_if",
                        {
                            xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `
                        },
                        "controls_wait_until",
                        "controls_whileUntil",
                    ]
                },
                {
                    name: "Operators",
                    icon: `/images/icon/maths.png`,
                    color: "#293939",
                    blocks: [
                        {
                            xml: '<label text="Math"></label>',
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">ADD</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MINUS</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MULTIPLY</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">DIVIDE</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_modulo">
                                    <value name="DIVIDEND">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="DIVISOR">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "random_seed",
                        {
                            xml: `
                                <block type="math_random_int">
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_trig">
                                    <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">45</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_round">
                                    <field name="OP">ROUND</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Logic"></label>',
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">GT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">LT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "logic_operation",
                        "logic_negate",
                        {
                            xml: '<label text="Text"></label>',
                        },
                        "text",
                        "text_join",
                        {
                            xml: `
                                <block type="logic_compare">
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="text">
                                            <field name="TEXT">Hello!</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                    ]
                },
                {
                    name: "Variables",
                    icon: `/images/icon/relativity.png`,
                    color: "#ac5e2e",
                    blocks: "VARIABLE"
                },
                {
                    name: "Function",
                    icon: `/images/icon/jigsaw.png`,
                    color: "#17A589",
                    blocks: "PROCEDURE"
                },
                {
                    name: "Advanced",
                    icon: `/images/icon/expert.png`,
                    color: "#8E44AD",
                    blocks: [
                        {
                            xml: '<label text="Dashboard"></label>',
                        },
                        {
                            xml: `
                                <block type="send_into_source">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">33</field>
                                        </shadow>
                                    </value>
                                    <value name="source">
                                        <shadow type="text">
                                            <field name="TEXT">source1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Debug"></label>',
                        },
                        {
                            xml: `
                                <block type="print">
                                    <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">Hello, world!</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Sensor"></label>',
                        },
                        {
                            xml: `
                                <block type="dht_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="ds18x20_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Internal RTC"></label>',
                        },
                        {
                            xml: `
                                <block type="rtc_set_time">
                                    <value name="hour">
                                        <shadow type="math_number">
                                            <field name="NUM">16</field>
                                        </shadow>
                                    </value>
                                    <value name="min">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                    <value name="sec">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="day">
                                        <shadow type="math_number">
                                            <field name="NUM">22</field>
                                        </shadow>
                                    </value>
                                    <value name="month">
                                        <shadow type="math_number">
                                            <field name="NUM">8</field>
                                        </shadow>
                                    </value>
                                    <value name="year">
                                        <shadow type="math_number">
                                            <field name="NUM">2020</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "rtc_get_hour",
                        "rtc_get_min",
                        "rtc_get_sec",
                        "rtc_get_microsecond",
                        "rtc_get_day",
                        "rtc_get_month",
                        "rtc_get_year",
                        "rtc_sync_ntp",
                        {
                            xml: '<label text="Task"></label>',
                        },
                        "run_in_background",
                        {
                            xml: '<label text="Low Power Mode"></label>',
                        },
                        {
                            xml: `
                                <block type="light_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="deep_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "is_woke_from_deep_sleep",
                        "board_reset"
                    ]
                }
            ]
        }
    ]
});