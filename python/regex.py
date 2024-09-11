import re
email = input("enter your email? ").strip()
#            . => any character except newline
#-            * => 0 or more repetetions
#            + => 1 or more repetetions
#-            ? => 0 or 1 repetetions
#            {m} m repetetions
#            {m,n} m-n repetetions
#if re.search(r".+@.+\.com", email):
#    print("valid")
#else:
#    print("invalid")

#            ^ matches the start of the string
#            $ matches the end of the string just before the newline at the end of the string

#if re.search(r"^.+@.+\.com$", email):
#    print("valid")
#else:
#    print("invalid")

#            [] => set of characters
#            [^] => complementing the set

# to remove multiple '@'

# if re.search(r"^[^@]+@[^@]+\.edu$",email):
#     print("valid")
# else:
#     print("invalid")

## making it better

# if re.search(r"^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.com$", email):
#     print("valid")
# else:
#     print("invalid")

# we can make it even better be replacing the [a-zA-Z0-9] with \w
# \d can be used to represent decimal digits
# \D to sat not a decimal digit
# \s whitespace character
# \w words numbers and underscore
# \W not a word character
#*           A|B  => either A or B
#*          (...) => a group
#*          (?:...) => non-capturing version

domain = "com"
if re.search(fr"^\w+@(\w+\.)*+\.{domain}$", email , re.IGNORECASE):     ## flags
    print("valid")
else:
    print("invalid")
