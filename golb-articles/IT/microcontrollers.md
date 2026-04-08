---
title: Microcontrollers
date: 2024-01-31
---

## Raspberry Pico: relp a program with [`rshell`](https://github.com/dhylands/rshell)

- Press the BOOTSEL button on the Pico while connecting the Pico to the computer with a USB cable
- The Pico will appear as an USB drive
- Download the micropython bootloader (`.utf2`): [https://micropython.org/download/RPI_PICO/](https://micropython.org/download/RPI_PICO/)
- Drag and drop the `.utf2` on the Pico USB drive
- The Pico will disconnect and reconnect as a new USB drive
- Install `rshell` with `python -m pip install rshell`
- Add the user to the `dialout` group with `sudo usermod -a -G dialout $USER`
- start `rshell`, it will automatically connect to it
- To start a RELP enter `repl`, you will see three right arrows “>>>”

## Raspberry Pico: upload a program with `pyboard`

- Download `pyboard.py` from https://raw.githubusercontent.com/micropython/micropython/master/tools/pyboard.py
- Create your program `boot.py`
- Run `python3 pyboard.py --device /dev/ttyUSB0 -f cp :boot.py boot.py`

## ESP32: upload a program with [Arduino IDE](https://www.arduino.cc/en/software)

- Install the ESP32 board in the Arduino IDE
- Select the board and the port
- Press button RESET (EN) on the ESP32 until `Connecting...` appears in the IDE
- The program will upload

> Arduino core for the ESP32: https://github.com/espressif/arduino-esp32

## Using `arduino-cli`

```sh
# for example with `nix-env`
nix-env -iA nixpkgs.arduino-cli

# we will need access to the `/dev/ttyACM0` as a simple user.
# another unelegant solution is to run all the commands as root.
# add the current user to the group "dialout"
sudo usermod -a -G dialout

# to ensure that your current shell is using the `dialout` group, you can use the command `id`.
# if you don't have the `dialout` group you can force reloading your shell by using `su - $USER`

# list the boards
arduino-cli board list
# this command should shows the correct tty (for example `/dev/ttyACM0`) and the "Fully Qualified Board Name" also known as `fqbn`

# install a library
arduino-cli lib install LIBRARY_NAME

# compile the sketch
arduino-cli compile --fqbn arduino:avr:uno sketch.ino

# upload the sketch
arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno sketch.ino

# other useful commands
arduino-cli config init # create a config file

arduino-cli core update-index  # update the index

arduino-cli core install arduino:avr ## install arduino AVR family board

arduino-cli board listall # list supported board

arduino-cli board details -b arduino:avr:nano # show detail on this board (to find the correct option)

# command line completion
arduino-cli completion bash > arduino-cli.sh
mv arduino-cli.sh /etc/bash_completion.d/ # need root
```

## Interact with the serial port

When using the [default arduino software](https://www.arduino.cc/en/software), we have an integrated serial monitor. But here, we are using the CLI and de facto there are no GUI so we will use the useful `screen` [command](https://www.gnu.org/software/screen/manual/screen.html)!

To do so, we need:

- the tty (for example `/dev/ttyACM0`)
- the baud rate (the baud rate is specified in the sketch using `Serial.begin(115200);`)

```sh
screen /dev/ttyACM0 115200
```

To leave the screen session we can use `Ctrl+a` then `k` (for `kill`), the screen should then ask a confirmation with `y` key

