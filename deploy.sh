#!/bin/bash

echo Uploading...

#ncftp <<EOF
#open -u $FTP_USER -p $FTP_PASS $FTP_HOST
#cd alexandre.xyz/
#put -R *
#bye
#EOF

sh s3-put -k $S3_ACCESS_KEY -s $S3_SECRET_KEY -T . $S3_BUCKET

echo Done !
