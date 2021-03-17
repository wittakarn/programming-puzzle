class PresentDelivery:

    def __init__(self, delivery_mans):
        self.delivery_mans = delivery_mans

    def deliver(self, input_puzzle):
        number_of_develivery_man = len(self.delivery_mans)

        for delivery_man in self.delivery_mans:
            #print(delivery_man.current_position)
            delivery_man.trail_history[delivery_man.current_position[0]][delivery_man.current_position[1]] = True
            #print(delivery_man.trail_history)

        for index, direction in enumerate(input_puzzle):
            self.mark_track(index % number_of_develivery_man, direction)

    def mark_track(self, delivery_man_index, direction):
        delivery_man = self.delivery_mans[delivery_man_index]

        if direction == '^':
            delivery_man.current_position[1] = delivery_man.current_position[1] + 1
        elif direction == 'v':
            delivery_man.current_position[1] = delivery_man.current_position[1] - 1
        elif direction == '<':
            delivery_man.current_position[0] = delivery_man.current_position[0] + 1
        elif direction == '>':
            delivery_man.current_position[0] = delivery_man.current_position[0] - 1

        delivery_man.trail_history[delivery_man.current_position[0]][delivery_man.current_position[1]] = True