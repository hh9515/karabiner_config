// {
//     "description": "Change caps_lock to right_shift in finder and vscode (alone to f18)",
//     "manipulators": [
//         {
//             "conditions": [
//                 {
//                     "bundle_identifiers": [a
//                         "^com.apple.finder|com.microsoft.VSCode$"
//                     ],
//                     "type": "frontmost_application_if"
//                 }
//             ],
//             "from": {
//                 "key_code": "caps_lock"
//             },
//             "to": [
//                 {
//                     "key_code": "right_shift"
//                 }
//             ],
//             "to_if_alone": [
//                 {
//                     "key_code": "f18"
//                 }
//             ],
//             "type": "basic"
//         }
//     ]
// },
