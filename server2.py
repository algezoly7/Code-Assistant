import sys
from concurrent import futures
import time

import grpc

import test_pb2 as pb2
import test_pb2_grpc as pb2_grpc

import requests

def query(payload):
    AcI_URL = "https://oa6kdk8gxzmfy79k.us-east-1.aws.endpoints.huggingface.cloud"
    headers = {
    "Accept" : "application/json", "Content-Type": "application/json" 
    }
    response = requests.post(AcI_URL, headers=headers, json=payload)
    return response.json() 

# SERVICE_API
class ServiceDefinition(pb2_grpc.ServiceDefinitionServicer):

    def __init__(self):
        self.code = ""
        self.response = None

    def generate_code(self, request, context):
        self.code = request.code
        self.response = pb2.output_code()
        output = query({ "inputs": self.code, "parameters": {}})
        self.response.out_code = output[0]['generated_text']
        return self.response

def main():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pb2_grpc.add_ServiceDefinitionServicer_to_server(ServiceDefinition(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    print("Server listening on 0.0.0.0:{}".format(8080))
    try:
        while True:
            time.sleep(10)
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    main()
