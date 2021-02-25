./node_modules/.bin/grpc_tools_node_protoc ./src/grpc/proto/*/*.proto \
  ./src/grpc/proto/*.proto --proto_path=./src/grpc/proto \
  --js_out=import_style=commonjs,binary:./src/grpc/compiled-web \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:./src/grpc/compiled-web

#./node_modules/.bin/grpc_tools_node_protoc ./src/grpc/proto/*/*.proto \
#  ./src/grpc/proto/*.proto --proto_path=./src/grpc/proto \
#  --js_out=import_style=commonjs,binary:./src/grpc/compiled-node \
#  --grpc_out=grpc_js:./src/grpc/compiled-node

./node_modules/.bin/grpc_tools_node_protoc ./src/grpc/proto/*/*.proto \
  ./src/grpc/proto/*.proto --proto_path=./src/grpc/proto \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --js_out=import_style=commonjs,binary:./src/grpc/compiled-node \
  --grpc_out=grpc_js:./src/grpc/compiled-node \
  --ts_out="service=grpc-node,mode=grpc-js:./src/grpc/compiled-node"

find ./src/grpc/compiled-node/ -type f -exec gsed -i \
  's/require(\x27@grpc\/grpc-js\x27)/eval(\x27require\x27)(\x27@grpc\/grpc-js\x27)/g' {} \;

#find ./src/grpc/compiled-node/ -type f -exec gsed -i \
#  's/import \* as grpc from "@grpc\/grpc-js"/const grpc = eval(\x27require\x27)(\x27@grpc\/grpc-js\x27)/g' {} \;
