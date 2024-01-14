/**
 * Fs module stands for "file system," and it provides an API for interacting with the file system.
 * Here we demonstrate read and write operations using different APIs
 * Source: https://nodejs.org/api/fs.html
 */

'use strict'
const { pipeline } = require('stream')
const { join } = require('path')
const {
  createReadStream,
  createWriteStream,
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
} = require('fs')
const {
  readFile: readFileAsync,
  writeFile: writeFileAsync,
} = require('fs/promises')
const { Transform } = require('stream')

const fileToUpperUsingStream = (inputPath, outputPath) => {
  const createUppercaseStream = () => {
    return new Transform({
      transform(chunk, enc, next) {
        const uppercased = chunk.toString().toUpperCase()
        next(null, uppercased)
      },
    })
  }

  pipeline(
    createReadStream(inputPath),
    createUppercaseStream(),
    createWriteStream(outputPath),
    (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('Finished writing')
    }
  )
}

const fileToUpperUsingPromises = async (inputPath, outputPath) => {
  try {
    const data = await readFileAsync(inputPath, 'utf-8')

    const uppercased = data.toUpperCase()

    await writeFileAsync(outputPath, uppercased)

    console.log('Finished writing')
  } catch (err) {
    console.error(err)
  }
}

const fileToUpperUsingCallback = (inputPath, outputPath, callback) => {
  readFile(inputPath, 'utf-8', (readErr, data) => {
    if (readErr) {
      return callback(readErr)
    }
    const uppercased = data.toUpperCase()
    writeFile(outputPath, uppercased, (writeErr) => {
      if (writeErr) {
        return callback(writeErr)
      }
      return callback(null)
    })
  })
}

const fileToUpperUsingSynchronous = (inputPath, outputPath) => {
  try {
    const data = readFileSync(inputPath, 'utf-8')

    const uppercased = data.toUpperCase()

    writeFileSync(outputPath, uppercased)

    console.log('Finished writing')
  } catch (err) {
    console.error(err)
  }
}

const inputFile = __filename
const outputFile = join(__dirname, `out.txt`)
fileToUpperUsingSynchronous(inputFile, outputFile)
fileToUpperUsingCallback(inputFile, outputFile, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Finished writing')
  }
})

fileToUpperUsingPromises(inputFile, outputFile)
fileToUpperUsingStream(inputFile, outputFile)
