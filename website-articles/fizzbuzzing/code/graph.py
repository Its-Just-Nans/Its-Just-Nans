#!/usr/bin/env python

"""This program shows `hyperfine` benchmark results as a histogram."""

import argparse
import json
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("file", help="JSON file with benchmark results")
parser.add_argument("--title", help="Plot title")
parser.add_argument("-o", "--output", help="Save image to the given filename.")

args = parser.parse_args()

with open(args.file, encoding="utf-8") as f:
    results = json.load(f)["results"]

labels = [b["command"] for b in results]
times = [b["mean"] for b in results]

fig, ax = plt.subplots()

colors = ['blue', 'green', 'orange']
plt.bar(labels, times, color=colors)
plt.ylabel('Time (s)')
fig.set_size_inches(10, 6)

if args.title:
    plt.title(args.title)

if args.output:
    plt.savefig(args.output)
else:
    plt.show()
