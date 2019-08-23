const fs = require('fs')
const path = require('path')

/**
 * Receives a path relative to the current working directory.
 * The directory from where the node process has been invoked (process.cwd())
 */
class FileHandler {
  /**
   * Builds a FileHandler that is capable of reading the lines from a file specified as a relative path
   * @param relativeFilePath - an array with the path relative to the current working directory.
   * Example given:
   *
   * to point to a file located in 'Files/myFile.txt' relative to the current working directory
   * (where the node process is invoked) the "relativeFilePath" must be ['Files', 'myFile.txt']
   */
  constructor (relativeFilePath) {
    this.absoluteFilePath = path.join(process.cwd(), ...relativeFilePath)
  }

  /**
   * Reads the file from the provided path and tries to obtain the lines.
   * The split is usable by both Windows and UNIX systems
   * @returns {never|string[]} an array with the file lines
   */
  getLines () {
    let fileContent = fs.readFileSync(this.absoluteFilePath, 'utf8')
    let lines = fileContent.split(/\r?\n/)
    return lines
  }
}

module.exports = FileHandler
