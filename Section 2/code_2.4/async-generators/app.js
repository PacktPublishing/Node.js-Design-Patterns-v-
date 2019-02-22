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
async function* getFilesIterator() {
  try {
    const readDirectory = await readdirAsync(inbox);
    for (const file of readDirectory) {
      yield file;
    }
  } catch (error) {
    throw Error(error);
  }
}

async function process() {
  try {
    const allFiles = await getFilesIterator(); // AsyncGenerator Object
    for await (const file of allFiles) {
      const read = await readFileAsync(join(inbox, file), "utf8");
      const reverse = await reverseText(read);
      await writeFileAsync(join(outbox, file), reverse);
      console.log(`${file} has been processed!`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("*** All files processed ***");
  }
}

process();