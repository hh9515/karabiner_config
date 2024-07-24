# !/bin/bash
# osascript -e 'tell application "System Events" to tell process "NotificationCenter"' -e 'try' -e 'click last item of windows' -e 'on error' -e 'do shell script "open -a Lark.app"' -e 'end try' -e 'end tell' 

osascript -e 'tell application "System Events"
	tell process "Notification Center"
		try
            click group 1 of UI element 1 of scroll area 1 of window "Notification Center"
            set theActions to actions of group 1 of UI element 1 of scroll area 1 of window "Notification Center"
            repeat with theAction in theActions
            	if description of theAction is "Close" then
            		tell group 1 of UI element 1 of scroll area 1 of window "Notification Center"
            			perform theAction
            		end tell
            	end if
            end repeat
		on error
            do shell script "open -a \"Lark.app\""
        end try
	end tell
end tell'

# osascript -e 'do shell script \"open -a \"Kim.app\"\"'
# 现在本地terminal运行一下获取权限


# before big sur notifications
# osascript -e 'tell application "System Events" to tell process "NotificationCenter"
#     try
#             click last item of windows
#         on error
#             do shell script "open -a \"Kim.app\""
#         end try
#     end tell'
