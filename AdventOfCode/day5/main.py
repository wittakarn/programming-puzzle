import re

input_file = open('D:\\Coding\\AventOfCode\\day5\\input.txt', 'r')
lines = input_file.readlines()

nice_str_count = 0
# Strips the newline character
for line in lines:
    str_input = line.strip()
    if re.search("[aeiou].*[aeiou].*[aeiou]", str_input) and re.search("aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|uu|rr|ss|tt|uu|vv|ww|xx|yy|zz+", str_input) and not re.search("ab|cd|pq|xy+", str_input) :
        nice_str_count = nice_str_count + 1

print("nice string count %d" % nice_str_count)        