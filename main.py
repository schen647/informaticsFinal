#!/usr/bin/env python3
# coding=utf-8
from websock import WebSocketServer
import subprocess
import json
clientsPool = []



def on_data_receive(client, data):
    '''Called by the WebSocket server when data is received.'''
    # decode data into json
    data = json.loads(data)

    action = data['action']
    if(action == 'align'): 

    
        cmd = "muscle -in seqs.fa -out seqs.afa"
 
    ## run it ##
        p = subprocess.Popen(cmd, shell=True, stderr=subprocess.PIPE)
        muscleOut = ''
        while True: #decode output
            #out =
            out = p.stderr.read(1).decode('utf-8')
            if out == '' and p.poll() != None:
                break
            if out != '':
                muscleOut = muscleOut + out
                # limit muscle output to the last 1000 characters
            if len(muscleOut) > 1000:
                muscleOut = muscleOut[-1000:]

            # break if the client is no longer in the client pool
            if client not in clientsPool:
                break
            response = {'action': 'align', 'parameters':{'data': muscleOut}}
            #client.send(json.dumps(response))
            my_server.send_all(client, json.dumps(response), echo=True)

        #case 'trim':
    if(action == 'trim'):
            # do something
        pass
        #case 'tree':
    if(action == 'tree'):
        # do something
        pass
    if(action == 'ping'): 
        response = {'action': 'pong'}
        #client.send(json.dumps(response))
        my_server.send_all(client, json.dumps(response), echo=True)


def on_connection_open(client):
    '''Called by the WebSocket server when a new connection is opened.'''
    # add the client to the pool
    clientsPool.append(client)
    
def on_error(exception):
    '''Called by the WebSocket server whenever an Exception is thrown.'''
    my_server.close_client(exception.client)
    
def on_connection_close(client):
    '''Called by the WebSocket server when a connection is closed.'''
    # Your implementation here.
    # remove the client from the pool
    clientsPool.remove(client)

def on_server_destruct():
    '''Called immediately prior to the WebSocket server shutting down.'''
    # Your implementation here.

my_server = WebSocketServer(
    "0.0.0.0",        # Example host.
    8467,               # Example port.
    on_data_receive     = on_data_receive,
    on_connection_open  = on_connection_open,
    on_error            = on_error,
    on_connection_close = on_connection_close,
    on_server_destruct  = on_server_destruct
)


my_server.serve_forever()