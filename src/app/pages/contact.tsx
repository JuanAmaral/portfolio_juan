import Image from "next/image";

export default function Contact() {
  return (
    <main className="container bg-green-500 flex flex-col">
      <div className=" w-[50%] flex flex-col p-2 bg-gradient-to-br from-[#0D0D0D] via-[#131315] to-transparent shadow-md rounded-[40px]">
        <input></input>
        <input></input>
        <input></input>
        <button>Send Mensage</button>
      </div>

      <div>
        <a>Let’s discuss on something cool together</a>
        <div>
          <button>contato@juanamaral.com.br</button>
          <button>+55 62 99291 1658</button>
          <button>In All world</button>
        </div>
      </div>
    </main>
  );
}
