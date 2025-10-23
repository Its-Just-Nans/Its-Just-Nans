SIZE=1024

all: transparent logo

transparent:
	sed '22d' logo.svg > logo-transparent.svg
	inkscape -w $(SIZE) -h $(SIZE) logo-transparent.svg -o MAD_$(SIZE)px_transparent.png
	rm logo-transparent.svg


logo:
	inkscape -w $(SIZE) -h $(SIZE) logo.svg -o MAD_$(SIZE)px.png