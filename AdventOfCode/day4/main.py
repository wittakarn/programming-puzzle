import hashlib

counter = 0
hexadecimal = ''

while not hexadecimal.startswith('000000'):
    counter = counter + 1
    hexadecimal = hashlib.md5(('yzbqklnj' + str(counter)).encode('utf-8')).hexdigest()
    
print("counter : %s" % counter)