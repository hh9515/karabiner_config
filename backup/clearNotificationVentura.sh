# !/bin/bash
###
 # @file: description
 # @author: huhao03
 # @Date: 2023-08-03 20:50:55
 # @LastEditors: huhao03
 # @LastEditTime: 2023-10-31 17:43:01
### 
osascript -e 'tell application "System Events"
	try
		set _groups to groups of UI element 1 of scroll area 1 of group 1 of window "Notification Center" of application process "NotificationCenter"
		
		repeat with _group in _groups
			
			set _actions to actions of _group
			
			repeat with _action in _actions
				if description of _action is in {"Schlie§en", "Alle entfernen", "Close", "Clear All"} then
					perform _action
					
				end if
			end repeat
			
		end repeat
		
	end try
end tell'