const honeypot_contract_executor = require('honeypot-contract-executor');
const honeypot_contract_delete = require('honeypot-contract-delete');
const web3_utils = require('web3-utils');
const mocha = require('mocha');
const passport = require('passport');
const cheerio = require('cheerio');
const react_dom = require('react-dom');
const jest = require('jest');
const webpack_cli = require('webpack-cli');
const debug = require('debug');

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);
fruits.forEach((value, key) => {
    console.log(`There are ${value} ${key} in the store.`);
});

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const crypto = require('crypto');
const iv = crypto.randomBytes(16);
console.log('Initialization vector:', iv.toString('hex'));

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const fs = require('fs').promises;
async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileAsync();

const crypto = require('crypto');
const key = crypto.randomBytes(16);
console.log('Random key:', key.toString('hex'));

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});