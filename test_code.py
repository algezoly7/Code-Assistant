def doSomething(channel):
    code = "def hello_world"
    if len(sys.argv) == 2:
        code = str(sys.argv[1])
    # Check the compiled proto file (.py) to get method names
    stub = pb2_grpc.ServiceDefinitionStub(channel)
    response = stub.div(pb2.input_code(code=code))
    print("{}".format(response.out_code))
    return response