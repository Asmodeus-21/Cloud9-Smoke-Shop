#!/bin/bash

# Move files
git mv products/accessories/raw-snapback-hat.jpeg products/lifestyle/raw-snapback-hat.jpeg
git mv products/rolling/clipper-lighter-solid.jpeg products/accessories/clipper-lighter-solid.jpeg

# Delete old files
git rm products/lifestyle/vape-mat-pad.jpeg
git rm products/accessories/cotton-bacon-prime.jpg
git rm products/accessories/nitecore-charger-i2.jpg
git rm products/accessories/resin-drip-tip-810.jpeg
git rm products/accessories/smok-rpm-coils.jpeg

# Add new file
git add products/glass/tyson-gravity-bong-2.0.jpeg

# Commit changes
git commit -m "Reorganize product files: move accessories and rolling items, delete old products, add new bong"
