#!/bin/bash

echo Uploading...

ncftp <<EOF
open -u $FTP_USER -p $FTP_PASS $FTP_HOST
cd alexandrelion.com/
put -R *
bye
EOF

echo Done !
