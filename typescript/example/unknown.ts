let data: unknown;

data = "hello";
let item: String;

//item = data; /// error Type 'unknown' is not assignable to type 'String'

if (typeof data == "string") {
  item = data;
}
