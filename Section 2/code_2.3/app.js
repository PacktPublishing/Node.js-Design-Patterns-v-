const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const {
  promisify
} = require("util");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  Promise.resolve(str
    .split("")
    .reverse()
    .join(""));

const readdirAsync = promisify(readdir); // Promisified version of readdir
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Read and reverse contents of text files in a directory
async function readReverseWrite(file) {
  try {
    const read = await readFileAsync(join(inbox, file), "utf8");
    const reverse = await reverseText(read);
    await writeFileAsync(join(outbox, file), reverse);
  } catch (error) {
    throw Error(error);
  } finally {
    console.log(`${file} has been processed!`);
  }
}

async function processFiles() {
  try {
    const getAllFiles = await readdirAsync(inbox);
    const processAllFiles = getAllFiles.map(file => readReverseWrite(file));
    await Promise.all(processAllFiles);
  } catch (error) {
    console.log(error); // Handle errors
  } finally {
    console.log("*** All files processed ***");
  }
}

processFiles();