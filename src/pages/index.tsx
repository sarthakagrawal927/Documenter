import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startservice = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  useEffect(() => {
    startservice();
  }, []);

  const onClick = async () => {
    if (!ref.current) return;

    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });

    setCode(result.code);
  };

  return (
    <div>
      <textarea
        name=''
        id=''
        value={input}
        onChange={(e) => setInput(e.target.value)}></textarea>
      <button onClick={onClick}>Submit</button>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
