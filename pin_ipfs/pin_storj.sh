#!/bin/bash
#for filename in ~/Meltdown/Images_revealed_v1/json/*; do
#   curl -X POST -F file=@"$filename" https://demo.storj-ipfs.com/api/v0/add
#done

for filename in ~/Meltdown/Images_revealed_v1/images/*; do
    curl -X POST -F file=@"$filename" https://demo.storj-ipfs.com/api/v0/add
done
