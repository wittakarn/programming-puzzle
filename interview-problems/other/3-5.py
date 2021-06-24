import math

input = input()
length = int(input)
firstPartLength = math.ceil((length / 2))
secondPartLength = length - firstPartLength
total_star = 1
isStarLinePrinted = False

for y in range(firstPartLength):
    non_start_count = (length - total_star) / 2
    left_non_star_count = math.floor(non_start_count)
    right_non_star_count = math.ceil(non_start_count)
    for x in range(length):

        if x < left_non_star_count or length - x - 1 < right_non_star_count:
            print(' ', end='')
        else:
            print('*', end='')

    print()
    if y < firstPartLength - 1:
        total_star = total_star + 2



if length % 2 == 1:
    total_star = total_star - 2


for y in range(secondPartLength):
    
    non_start_count = (length - total_star) / 2
    left_non_star_count = math.floor(non_start_count)
    right_non_star_count = math.ceil(non_start_count)
    for x in range(length):

        if x < left_non_star_count or length - x - 1 < right_non_star_count:
            print(' ', end='')
        else:
            print('*', end='')

    total_star = total_star - 2
    print()
