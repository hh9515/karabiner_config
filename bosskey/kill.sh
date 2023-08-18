#!/bin/bash

# 关闭bettertouchtool
echo "关闭bettertouchtool..."
osascript -e 'tell application "BetterTouchTool" to quit'

# 获取karabiner-elements的所有进程ID并关闭
echo "关闭karabiner-elements..."
pids=$(pgrep -f karabiner)
for pid in $pids; do
  echo "终止进程 $pid"
  kill -9 $pid
done

echo "所有相关进程已关闭。"

