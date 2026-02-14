---
title: Android
---

## Decompile an app

Moved to <https://n4n5.dev/articles/work-with-apk/>

## Waydroid

```sh
sudo waydroid init
waydroid session start
waydroid show-full-ui

# stop
waydroid session stop

# if you are running x11, use weston to have wayland interface
weston --socket=mysocket
# then do the command inside the weston terminal
```

> <https://docs.waydro.id/usage/install-on-desktops>

## Manually install SDK

Choose version

```txt
10406996 = 11.0
9862592  = 10.0
9477386  = 9.0
9123335  = 8.0
8512546  = 7.0
```

```bash
export ANDROID_SDK_ROOT=$HOME/.android/sdk
curl https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -o file.zip
mkdir -p $ANDROID_SDK_ROOT/cmdline-tools/
unzip file.zip -d $ANDROID_SDK_ROOT/
mv $ANDROID_SDK_ROOT/cmdline-tools/ $ANDROID_SDK_ROOT/temp
mkdir -p $ANDROID_SDK_ROOT/cmdline-tools/latest
mv $ANDROID_SDK_ROOT/temp/* $ANDROID_SDK_ROOT/cmdline-tools/latest
SDKMANAGER=$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager
touch $ANDROID_SDK_ROOT/repositories.cfg

# accept licenses
yes | $SDKMANAGER --licenses


$SDKMANAGER --list
$SDKMANAGER tools platform-tools
# install correct version
$SDKMANAGER 'platforms;android-10'
$SDKMANAGER 'build-tools;28.0.3'
$SDKMANAGER "system-images;android-29;default;x86"


# emulator avd
$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/avdmanager create avd -n TestAVD -k "system-images;android-29;default;x86" --device "pixel_4"
# to delete it
$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/avdmanager delete avd -n TestAVD

$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/avdmanager list avd

$ANDROID_SDK_ROOT/emulator/emulator -avd TestAVD


# android stuff
export ANDROID_SDK_ROOT=$HOME/.android/sdk
export ANDROID_HOME=$HOME/.android/sdk/
export SDKMANAGER=$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager
export ANDROID_NDK_HOME=$HOME/.android/sdk/ndk/
```
