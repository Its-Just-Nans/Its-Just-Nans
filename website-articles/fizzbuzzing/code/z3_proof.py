# pip install z3-solver
from z3 import Solver, Int, Or, unsat

# Create a Z3 solver instance
solver = Solver()

# Create an integer variable
x = Int('x')

# Add the constraint that x is divisible by 15
solver.add(x % 15 == 0)

# Add the negation of the conclusion: x is not divisible by 3 or x is not divisible by 5
solver.add(Or(x % 3 != 0, x % 5 != 0))

# Check if the solver is satisfiable
if solver.check() == unsat:
    print("Every number divisible by 15 is also divisible by 3 and 5.")
else:
    print("There exists a number divisible by 15 that is not divisible by 3 or 5.")
