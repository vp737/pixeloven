const fs = require("fs");
const path = require("path");

/**
 * Returns path if it exists
 * @param  {...String} paths 
 */
function getPath(...paths) {
    const resolvedPath = path.resolve(...paths);
    if (fs.existsSync(resolvedPath)) {
        return resolvedPath;
    }
    return false;
}

/**
 * Returns parsed package JSON by path
 * @param {String} absPath 
 */
function getPackage(absPath) {
    const packageJSON = fs.readFileSync(`${absPath}/package.json`);
    return JSON.parse(packageJSON);
}

/**
 * Is path a directory
 * @param {String} path 
 */
function isDirectory(path) {
    try {
        const stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
}

module.exports = {
    getPath,
    getPackage,
    isDirectory
}