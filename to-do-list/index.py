import redis

key = 'mylist'

def initial_redis_connection():
    return redis.Redis(host='us1-vast-phoenix-32654.upstash.io', port=32654, password='63e965ebc06a46509d28990f0536fc48')

def display_to_do_list():
    client = initial_redis_connection()
    taskList = client.lrange(key, 0, -1)

    print('Current to-do-list')
    for index in range(len(taskList)):
        print(str(index + 1) + '. ' + taskList[index].decode('utf-8'))

def command_selection_prompt():
    print('Please select a command between "add" and "delete"')
    return input()

def add_task_prompt():
    print('Please add a new task')
    newTask = input()

    if newTask != '':
        client = initial_redis_connection()
        client.lpush(key, newTask)
        print('Task ' + newTask + ' has been added')
        add_task_prompt()

def delete_task_prompt():
    display_to_do_list()
    print('Please delete a task')
    deleteTask = input()

    if deleteTask != '':
        client = initial_redis_connection()
        client.lrem(key, 0, deleteTask)
        print('Task ' + deleteTask + ' had been deleted')
        delete_task_prompt()

def start_program():
    display_to_do_list()
    commandSelected = command_selection_prompt()
    if commandSelected == 'add':
        add_task_prompt()
    elif commandSelected == 'delete':
        delete_task_prompt()
    else:
        print('Wrong selection, you need to select only "add" or "delete". Please try again.')
        start_program()

start_program()