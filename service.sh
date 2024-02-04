#!/bin/bash
nohup nodejs ./backend/index.js &
cd ./frontend
npm run start