input = input()
length = int(input)

for y in range(length):
    for x in range(length):
        if x == y:
            print('*', end='')
        elif (length - x - 1) == y:
            print('*', end='')
        else:
            print(' ', end='')
    print()
