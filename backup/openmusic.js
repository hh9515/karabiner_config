{
    "description": "Change l_command+r_command to open music",
    "manipulators": [
        {
            "conditions": [
                {
                    "bundle_identifiers": [
                        "^com.apple.Music$"
                    ],
                    "type": "frontmost_application_unless"
                }
            ],
            "from": {
                "key_code": "right_command",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ]
                }
            },
            "to": [
                {
                    "shell_command": "open -a 'music.app'"
                }
            ],
            "type": "basic"
        },
        {
            "conditions": [
                {
                    "bundle_identifiers": [
                        "^com.apple.Music$"
                    ],
                    "type": "frontmost_application_if"
                }
            ],
            "from": {
                "key_code": "right_command",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "h",
                    "modifiers": [
                        "command"
                    ]
                }
            ],
            "type": "basic"
        }
    ]
}