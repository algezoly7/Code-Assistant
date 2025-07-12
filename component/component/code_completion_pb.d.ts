// package: code_completion
// file: code_completion.proto

import * as jspb from "google-protobuf";

export class input_code extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): input_code.AsObject;
  static toObject(includeInstance: boolean, msg: input_code): input_code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: input_code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): input_code;
  static deserializeBinaryFromReader(message: input_code, reader: jspb.BinaryReader): input_code;
}

export namespace input_code {
  export type AsObject = {
    code: string,
  }
}

export class output_code extends jspb.Message {
  getOutCode(): string;
  setOutCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): output_code.AsObject;
  static toObject(includeInstance: boolean, msg: output_code): output_code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: output_code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): output_code;
  static deserializeBinaryFromReader(message: output_code, reader: jspb.BinaryReader): output_code;
}

export namespace output_code {
  export type AsObject = {
    outCode: string,
  }
}

