import { serverHttp } from "./app";

serverHttp.listen(4000 , () => {
  console.log('🚀 Localhost em: localhost:4000');
});