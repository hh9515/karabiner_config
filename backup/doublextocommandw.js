{
    "description": "double x to command w",
    "manipulators": [
        {
            "conditions": [
                {
                    "name": "x2",
                    "type": "variable_if",
                    "value": 1
                }
            ],
            "from": {
                "key_code": "x"
            },
            "to": [
                {
                    "key_code": "w",
                    "modifiers": [
                        "command"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "x"
            },
            "parameters": {
                "basic.to_delayed_action_delay_milliseconds": 1500
            },
            "to": [
                {
                    "key_code": "x"
                },
                {
                    "set_variable": {
                        "name": "x2",
                        "value": 1
                    }
                }
            ],
            "to_delayed_action": {
                "to_if_canceled": [
                    {
                        "set_variable": {
                            "name": "x2",
                            "value": 0
                        }
                    }
                ],
                "to_if_invoked": [
                    {
                        "set_variable": {
                            "name": "x2",
                            "value": 0
                        }
                    }
                ]
            },
            "type": "basic"
        }
    ]
},