# test_pb2
# 7070

import sys
import grpc

sys.path.append("./service_spec")
import tutorial_pb2 as pb2
import tutorial_pb2_grpc as pb2_grpc


# TEST_CODE
def doSomething(channel):
    code = "def hello_world"
    if len(sys.argv) == 2:
        code = str(sys.argv[1])
    # Check the compiled proto file (.py) to get method names
    stub = pb2_grpc.ServiceDefinitionStub(channel)
    response = stub.generate_code(pb2.input_code(code=code))
    print("{}".format(response.out_code))
    return response


def main():
    # Connect to the server
    with grpc.insecure_channel('localhost:8080') as channel:
        # Call TEST_CODE
        doSomething(channel)


if __name__ == '__main__':
    main()