---
title: FFMPEG
sidebar_name: ffmpeg
---

## Download

- <https://ffmpeg.org/>

### Tricks

On windows, you can add the path to `ffmpeg.exe` to your global PATH variable to use it as `ffmpeg`

## Compress a file

```sh
ffmpeg -i input.mp4 -preset veryslow OUTPUT_NAME.mp4
```

> Caption:
>
> - `-preset veryslow` is the level of compress, see [here for others presets](https://trac.ffmpeg.org/wiki/Encode/H.264#:~:text=ultrafast)

## Zoom in a video

```sh
ffmpeg -i input.mp4 -vf "scale=2*iw:-1, crop=iw/2:ih/2:0:400" OUTPUT_NAME.mp4
```

> Caption:
>
> - `scale` enlarge the video, and `crop` cut a part
> - `crop` parameters are width:height:x:y
> - here, it is a zoom of `2`

## Cut a video

```sh
ffmpeg -ss 00:01:00 -i input.mp4 -t 00:02:00 -c copy OUTPUT_NAME.mp4
```

> - `-i` :This specifies the input file. In that case, it is (input.mp4)
> - `ss`: Used with -i, this seeks in the input file (input.mp4) to position.
> - `00:01:00`: This is the time your trimmed video will start with.
> - `t`: This specifies duration from start (00:01:40) to end (00:02:12).
> - `00:02:00`: This is the time your trimmed video will end with.
> - `c copy`: This is an option to trim via stream copy. (NB: Very fast)

<https://stackoverflow.com/a/42827058>

> - ⚠️ `-t` specifies the duration !
> - The OUTPUT_NAME need to have the same extension as the input file (or ffmpeg will need to re-encode the video)

## Format a video for Da Vinci Resolve for Linux

- On linux, Da Vinci resolve can't use proprietary library, so you need to convert your file, for example in `DNxHD`:

```sh
ffmpeg -i input.mkv -c:v dnxhd -b:v 185M -c:a pcm_s16le output.mov
```

> - [https://en.wikipedia.org/wiki/Avid_DNxHD](https://en.wikipedia.org/wiki/Avid_DNxHD)

## Convert to ProRes

```sh
ffmpeg -i input.mp4 -c:v prores_ks -profile:v 3 -vendor apl0 -bits_per_mb 8000 -pix_fmt yuv422p10le output.mov
```

> - from [https://ottverse.com/ffmpeg-convert-to-apple-prores-422-4444-hq/](https://ottverse.com/ffmpeg-convert-to-apple-prores-422-4444-hq/)

## Extract audio from video

```sh
ffmpeg -i input.mp4 -vn -acodec copy output-audio.mp3
```

> - from <https://stackoverflow.com/a/27413824>

## Convert video to GIF

```sh
ffmpeg -i input.mp4 -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```

> - from <https://superuser.com/a/556031>

## Create a retro GIF

```sh
# 10 fps
# 720 width
# 100 colors
ffmpeg -i input.mp4 -vf "fps=10,scale=720:-1:flags=neighbor,split[s0][s1];[s0]palettegen=max_colors=100[p];[s1][p]paletteuse=dither=none" -loop 0 output.gif
```

## Record screen

```sh
xhost +local:
ffmpeg -f x11grab -framerate 25 -video_size 1024x768 -i $DISPLAY+100,200 output.mp4
```
