const fs = require('fs-extra');
const path = require('path');

function copyAssets() {
    const from = path.resolve(__dirname, '../lib');
    const to = path.resolve(__dirname, '../dist/icons/src');
    fs.copy(from, to);
}

copyAssets();
