input = input()
original_input = int(input)
length = (original_input * 2) - 1
left_index = original_input - 1
right_index = left_index
left_character = 'A'
right_character = 'B'
is_edge_marked = False

for y in range(length):
    for x in range(length):
        if x == left_index or x == right_index:
            print('+', end='')
        elif x < left_index:
            print(left_character, end='')
        elif x > right_index:
            print(right_character, end='')            
        else:
            print('E', end='')
    print()

    if right_index == length - 1:
        is_edge_marked = True

    if is_edge_marked:
        left_character = 'C'
        right_character = 'D'
        left_index = left_index + 1
        right_index = right_index - 1
    else:
        left_index = left_index - 1
        right_index = right_index + 1
