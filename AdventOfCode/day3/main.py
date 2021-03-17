import math
from DeliveryMan import DeliveryMan
from PresentDelivery import PresentDelivery

#file = open("/home/pi/Coding/AventOfCode/day3/input.txt", "r")
file = open("D:\\Coding\\AventOfCode\\day3\\input.txt", "r")
input_puzzle = file.read()

delivery_man_count = 2
maximum_array_size = math.ceil(len(input_puzzle) / delivery_man_count) + 1
present_delivery = PresentDelivery([DeliveryMan(maximum_array_size), DeliveryMan(maximum_array_size)])
present_delivery.deliver(input_puzzle)

destribute_present_count = 0
for x in range(maximum_array_size * 2):
    for y in range(maximum_array_size * 2):
        if present_delivery.delivery_mans[0].trail_history[x][y] == True or present_delivery.delivery_mans[1].trail_history[x][y] == True:
            destribute_present_count += 1

print('Destribute present count %d' % destribute_present_count)