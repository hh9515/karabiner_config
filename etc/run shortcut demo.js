{
    "description": "Change l_command+r_command to toggle shadowrocket,shift+lcmd+rcmd to update subscription",
    "manipulators": [
      {
        "from": {
          "key_code": "right_command",
          "modifiers": {
            "mandatory": ["left_command"]
          }
        },
        "to": [
          {
            "shell_command": "shortcuts run 'toggleshadowrocket'"
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "right_command",
          "modifiers": {
            "mandatory": ["left_command", "left_shift"]
          }
        },
        "to": [
          {
            "shell_command": "shortcuts run 'updatesssub'"
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "right_command",
          "modifiers": {
            "mandatory": ["left_command", "left_shift"]
          }
        },
        "to": [
          {
            "shell_command": "shortcuts run 'toggleshadowrocket'"
          }
        ],
        "type": "basic"
      }
    ]
  }