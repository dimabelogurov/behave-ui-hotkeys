'use strict';

var hotkeys = {
    "backspace" : 8,
    "tab"       : 9,
    "enter"     : 10,
    "return"    : 13,
    "pause"     : 19,
    "esc"       : 27,
    "space"     : 32,
    "pageup"    : 33,
    "pagedown"  : 34,
    "end"       : 35,
    "home"      : 36,
    "left"      : 37,
    "up"        : 38,
    "right"     : 39,
    "down"      : 40,
    "delete"    : 46,
    "a"         : 65,
    "b"         : 66,
    "c"         : 67,
    "d"         : 68,
    "e"         : 69,
    "f"         : 70,
    "g"         : 71,
    "h"         : 72,
    "i"         : 73,
    "j"         : 74,
    "k"         : 75,
    "l"         : 76,
    "m"         : 77,
    "n"         : 78,
    "o"         : 79,
    "p"         : 80,
    "q"         : 81,
    "r"         : 82,
    "s"         : 83,
    "t"         : 84,
    "u"         : 85,
    "v"         : 86,
    "w"         : 87,
    "x"         : 88,
    "y"         : 89,
    "z"         : 90,
    "+"         : 107,
    "-"         : 109,
    "f1"        : 112,
    "f2"        : 113,
    "f3"        : 114,
    "f4"        : 115,
    "f5"        : 116,
    "f6"        : 117,
    "f7"        : 118,
    "f8"        : 119,
    "f9"        : 120,
    "f10"       : 121,
    "f11"       : 122,
    "f12"       : 123
};

module.exports = function(hotkey) {
    return hotkey && hotkeys[hotkey];
};
