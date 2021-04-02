#import the library
import redis
# Create connection object
r = redis.Redis(host='us1-vast-phoenix-32654.upstash.io', port=32654, password='63e965ebc06a46509d28990f0536fc48')
# set a value for the foo object
r.set('foo', 'bar')
# retrieve and print the value for the foo object
print(r.get('foo'))
print(r.get('key'))
