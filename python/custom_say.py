import sys

from custom_package import hello

if len(sys.argv) == 2:
    hello(sys.argv[1])
