#!/bin/bash
### BEGIN INIT INFO
# Provides:             piserver
# Required-Start:       $local_fs
# X-UnitedLinux-Should-Start:
# Required-Stop:        $local_fs
# X-UnitedLinux-Should-Stop:
# Default-Start:        2 3 4 5
# Default-Stop:         0 1 6
# Short-Description:    MyScriptName does a thing
# Description:          MyScriptName does a longer thing
### END INIT INFO
export PATH=$PATH:/opt/node/bin
export NODE_PATH=$NODE_PATH:/opt/node/lib/node_modules
export HOME=/root
case "$1" in
        start)
               exec sudo forever start /home/pi/Desktop/node/index.js
                ;;
                  stop)
                su - pi -c "forever stopall"
                forever stopall
                ;;
        restart)
                su - pi -c "forever restartall"
                forever restartall
                ;;
        status)
                su - pi -c "forever list"
                              forever list
                ;;
esac


exit 0

