// package: code_completion
// file: code_completion.proto

import * as code_completion_pb from "./code_completion_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceDefinitiongenerate_code = {
  readonly methodName: string;
  readonly service: typeof ServiceDefinition;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof code_completion_pb.input_code;
  readonly responseType: typeof code_completion_pb.output_code;
};

export class ServiceDefinition {
  static readonly serviceName: string;
  static readonly generate_code: ServiceDefinitiongenerate_code;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ServiceDefinitionClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generate_code(
    requestMessage: code_completion_pb.input_code,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: code_completion_pb.output_code|null) => void
  ): UnaryResponse;
  generate_code(
    requestMessage: code_completion_pb.input_code,
    callback: (error: ServiceError|null, responseMessage: code_completion_pb.output_code|null) => void
  ): UnaryResponse;
}

