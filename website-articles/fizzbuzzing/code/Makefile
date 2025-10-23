OPTIM=-O3
IO=-DOUTPUT
C=classic
A=array
CLASSIC=fizzbuzz_$(C).cpp
ARRAY=fizzbuzz_$(A).cpp
all: test


zig:
	zig c++ main.cpp $(CLASSIC) -o zig_$(C).out $(OPTIM) $(IO)
	zig c++ main.cpp $(ARRAY) -o zig_$(A).out $(OPTIM) $(IO)

gcc:
	g++ main.cpp $(CLASSIC) -o gcc_$(C).out $(OPTIM) $(IO)
	g++ main.cpp $(ARRAY) -o gcc_$(A).out $(OPTIM) $(IO)

clang:
	clang++ main.cpp $(CLASSIC) -o clang_$(C).out $(OPTIM) $(IO)
	clang++ main.cpp $(ARRAY) -o clang_$(A).out $(OPTIM) $(IO)


test: zig gcc clang
	hyperfine "./zig_$(C).out" "./gcc_$(C).out" "./clang_$(C).out" "./zig_$(A).out" "./gcc_$(A).out" "./clang_$(A).out" --export-json res$(OPTIM)$(IO).json
	$(MAKE) render

render:
	python graph.py res$(OPTIM)$(IO).json -o ../benchmark$(OPTIM)$(IO).jpg --title "Execution Times $(OPTIM) $(IO)"

data:
	$(MAKE) all OPTIM=-O0 IO=
	$(MAKE) all OPTIM=-O0 IO=-DOUTPUT
	$(MAKE) all OPTIM=-O3 IO=
	$(MAKE) all OPTIM=-O3 IO=-DOUTPUT