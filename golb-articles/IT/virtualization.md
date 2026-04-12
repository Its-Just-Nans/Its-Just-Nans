---
title: Virtualization
---

## qemu

- [https://wiki.debian.org/KVM](https://wiki.debian.org/KVM)

```sh
# need root
apt install qemu-system libvirt-daemon-system
adduser $USER libvirt
apt install virt-manager # nice GUI
```

## Virsh command

```sh
# or you can also edit the config
EDITOR=nano virsh edit --domain vm_name

# customize a qcow2 - useful for a cloud image
virt-customize -a disk.qcow2 \
  --hostname myvm \
  --root-password password:YourPass
```

## Resize VM

```sh
# should be root
# get the path of the qcow2 disk
virsh dumpxml --domain debian13 | grep qcow

# resize the disk
qemu-img resize /path/to/vm.qcow2 +20G

# then inside the VM

# little check on fstab - also to get the swap uuid
cat /etc/fstab
# turn off the swap
swapoff -a
# resize the partition
fdisk /dev/vda
    # delete partitions
    # create a new partitions with the same start sector
    # DONT delete the signature
partprobe
resize2fs /dev/vdaNUMBER
# optionally, if you have a swap partition
mkswap /dev/vdaNUMBER --uuid <UUID>
# restart the swap
swapon -a
```
