import socket

# Socket Host and port
SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000


# Create socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind(((SERVER_HOST, SERVER_PORT)))
server_socket.listen(1)
print('Listening on %s ...', SERVER_PORT)

while True:
    client_connection, client_address = server_socket.accept()

    request = client_connection.recv(1024).decode()
    print(request)

    # Parse HTTP headers
    # headers = request.split('\n')
    # filename = headers[0].split()[1]

    # Get file content
    # if filename == '/':
    #     filename = 'index.html'

    # if filename == '/scoreboard.html':
    #     filename = 'scoreboard.html'

    # get index.html
    # try:
    #     fin = open(filename)
    #     content = fin.read()
    #     fin.close()

    #     response = 'HTTP/1.0 200 OK\n\n' + content
    # except FileNotFoundError:
    #     fin = open('404.html')
    #     content = fin.read()
    #     fin.close()
    #     response = 'HTTP/1.0 200 OK\n\n' + content

    
    fin = open('index.index.html')
    content = fin.read()
    fin.close()
    response = 'HTTP/1.0 200 OK\n\n' + content
    client_connection.sendall(response.encode())
    client_connection.close()

server_socket.close()
