#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');

program
    .version('1.0.0')
    .argument('[filename]', 'Name of a file to execute')
    .action((args) => {
        console.log(args);
    });

const start = debounce(() => {
    console.log('starting users program');
}, 100);

chokidar
    .watch('.')
    .on('add', start)
    .on('change', () => console.log('File changed'))
    .on('unlink', () => console.log('File linked'));

