class DeliveryMan:

    def __init__(self, array_size):
        self.trail_history = self.init_history(array_size)
        self.current_position = [array_size - 1, array_size - 1]

    def init_history(self, array_size):
        return [[0 for x in range(array_size * 2)] for y in range(array_size * 2)]
        