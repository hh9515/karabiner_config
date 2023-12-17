{
    "description": "Change l_command+r_command to open shadowrocket",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.liguangming.Shadowrocket$"],
            "type": "frontmost_application_unless"
          }
        ],
        "from": {
          "key_code": "right_command",
          "modifiers": {
            "mandatory": ["left_command"]
          }
        },
        "to": [
          {
            "shell_command": "shortcuts run 'updatesssub'"
          },
          {
            "shell_command": "open -a 'Shadowrocket.app'"
          }
        ],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.liguangming.Shadowrocket$"],
            "type": "frontmost_application_if"
          }
        ],
        "from": {
          "key_code": "right_command",
          "modifiers": {
            "mandatory": ["left_command"]
          }
        },
        "to": [
          {
            "key_code": "h",
            "modifiers": ["command"]
          }
        ],
        "type": "basic"
      }
    ]
  }