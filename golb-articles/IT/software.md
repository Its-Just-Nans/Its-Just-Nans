---
title: Software
---

<!-- commands related to specific 'no-default' package -->

## VLC

Subtitle delay shortcut: `g` and `h`

## Thunar sftp connection

```sh
apt install gvfs-backends
```

## Mongo Config on Windows

These commands are for Windows user - [Documentation](https://docs.mongodb.com/manual/reference/configuration-options/)

If you want to change the moogoDB config, for example, the `bindIp`

- Stop the daemon

```powershell
net stop mongodb # You need to run it as admin
```

- Change your config - located in `<install directory>\bin\mongod.cfg`

Remember it's a YAML file, so you need to produce a correct file. **no tabs but spaces !**. You need to have admin rights to change the config file

- Start the mongoDB daemon

```powershell
net start mongodb # You need to run it as admin
```

## Manually get the fingerprint of a certificate from a browser

- Download the certificate from the browser
- The certificate is in PEM format, a human readable format (base64) but also sometimes with CRLF line endings
- Convert the certificate to a DER format (binary)

    ```sh
    openssl x509 -in certificate.pem -out certificate.der -outform DER
    ```

- Run sha256sum on the DER file

    ```sh
    sha256sum certificate.der
    ```

- Compare the hash with the one from the browser

- Now the public key (which is inside the certificate)
- Extract the public key from the certificate

    ```sh
    openssl x509 -in certificate.der -pubkey -noout | openssl enc -base64 -d > publickey.der
    ```

- Run sha256sum on the public key

    ```sh
    sha256sum publickey.der
    ```

- Compare the hash with the one from the browser

## Wireshark monitor mode

Set up the monitor mode on your wifi interface

```sh
# first you need to disconnect from any wifi network
# then as root
apt install iw

# see the interface
iw dev
INTERFACE="wlan0"

# change to monitor mode
ip link set "$INTERFACE" down
iw "$INTERFACE" set monitor none
ip link set "$INTERFACE" up

# see the interface "type"
iw dev
iw dev | grep 'type monitor'

# go back to managed mode
ip link set "$INTERFACE" down
iw "$INTERFACE" set type managed
ip link set "$INTERFACE" up
```

## Locales

```sh
apt install console-data
```

## Remove noise sound when Jack is connected but there is no music

- this is caused by a `power_save` setting, so we need to disable it

```sh
# should be root
echo 0 > /sys/module/snd_hda_intel/parameters/power_save
echo "options snd_hda_intel power_save=0" | tee -a /etc/modprobe.d/audio_disable_powersave.conf # make it persist
```

> - Reference: [https://askubuntu.com/a/1230834](https://askubuntu.com/a/1230834)

## nginx configuration

Useful commands

```sh
# check nginx config before restart
nginx -t
server nginx restart
```

Conf example

```conf
  merge_slashes off; # useful for a reverse proxy
  location / {
      proxy_pass          http://localhost:4200/;
  }
```

## Apache not forwarding `Authorization` header to PHP

You need to add in your `.htaccess` :

```bash
CGIPassAuth On
```

## webook package

The [webhook package](https://github.com/adnanh/webhook) is a useful utility package which create a server listening on 9000 and allow you to create responses to webhook.

Useful commands for the package

```sh
# edit the default conf file, can be yaml or json
nano /etc/webhook.conf

# to debug
# edit the service file
nano /etc/systemd/system/multi-user.target.wants/webhook.service
# add -verbose to ExecStart
# restart
systemctl restart webhook
# get verbose output
systemctl status webhook
```

## ngrok alternative

- [https://ngrok.com/](https://ngrok.com/)
- [https://localtunnel.github.io/www/](https://localtunnel.github.io/www/)

```sh
# ngrock (need install)
ngrok http 80

# localtunnel package (npx of bunx)
npx localtunnel --port 8000
bunx localtunnel --port 8000
```

## Polyglot powershell and bash script

```sh
echo `# <#`
# bash code
exit
#> > $null
# powershell code
```

> - [https://cspotcode.com/posts/polyglot-powershell-and-bash-script](https://cspotcode.com/posts/polyglot-powershell-and-bash-script)

## See developer tool of the Discord client

In `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` in `~/.config/discord/settings.json`

- [https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/)

## SSH VPN

- <https://github.com/sshuttle/sshuttle>

```sh
sshuttle --dns -r user@host 0/0 -vvvv -x 0/0:22
```

## yt-dlp

- <https://github.com/yt-dlp/yt-dlp>

```sh
# don't forget to quote the playlist URL
yt-dlp --yes-playlist -f ba -x --audio-format m4a -o "%(playlist_index)s_%(title)s.%(ext)s" "PLAYLIST"
```

## Random links

- [http://www-igm.univ-mlv.fr/~dr/expose.php](http://www-igm.univ-mlv.fr/~dr/expose.php) - exposé random
- [https://web.maths.unsw.edu.au/~lafaye/CCM/](https://web.maths.unsw.edu.au/~lafaye/CCM/) - Comment ça marche
- [http://deptinfo.cnam.fr/Enseignement/Memoires/LUSTEAU.Franck/Pages/Les_codages.htm](http://deptinfo.cnam.fr/Enseignement/Memoires/LUSTEAU.Franck/Pages/Les_codages.htm)
- [https://app.senecalearning.com/courses](https://app.senecalearning.com/courses) - courses all levels
- [CUT101](https://www.youtube.com/watch?v=OAH0MoAv2CI) - Cuts & Transitions 101
- [https://www.courstechinfo.be/](https://www.courstechinfo.be/) - technonoly courses
