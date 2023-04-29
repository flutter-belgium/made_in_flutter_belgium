#!/bin/bash

# CLEAR OLD BUILD FILES
rm -rf out_full_export

# BUILD NL
npm run export

mkdir out_full_export
cp -R out/* out_full_export/

# MAKE SITEMAP
node tool/generate_sitemap.js