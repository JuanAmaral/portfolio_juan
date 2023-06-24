import Image from "next/image";
import * as S from "../../pages/style.ts/contact/style";
import SocialNetwork from "../components/socialNetwork";
import Copyright from "../components/copyright";
import Menu from "../components/menu";
import { goPage } from "@/app/utils/navigatePages";
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
const arrow = require("../../assets/svg/arrow.svg");

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const customId = "custom-id-yes";
  const customIdError = "custom-id-error";
  const customIdPending = "custom-id-pending";
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current != null) {
      try {
        toast.info("Sending e-mail...", {
          className: "toast-pending",
          style: { background: "#0a0b0c", color: "#d9d9d9" },
          toastId: customIdPending,
          pauseOnHover: false,
          autoClose: 5000,
        });

        const response = await emailjs.sendForm(
          "service_ek6epcx",
          "template_91blpeu",
          form.current,
          "OktzoDnTZkNOtlfwV"
        );

        toast.success("Success, your email has been sent.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progressStyle: { background: "#00c78b" },
          theme: "colored",
          style: { background: "#0a0b0c", color: "#00c78b" },
          toastId: customId,
        });
        form.current.reset();

        console.log("SUCCESS!", response.status, response.text);
      } catch (error) {
        toast.error("Failed, check your message.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progressStyle: { background: "#4D5BCE" },
          theme: "colored",
          style: { background: "#0a0b0c", color: "#4D5BCE" },
          toastId: customIdError,
        });

        console.log("FAILED...", error);
      }
    } else {
      console.log("form null");
    }
  };
  return (
    <S.Container>
      <S.ContainerBox>
        <S.BoxForm ref={form} onSubmit={sendEmail}>
          <S.Input required placeholder="Your name"></S.Input>
          <S.Input required placeholder="Your e-mail"></S.Input>
          <S.Textarea required placeholder="Your message"></S.Textarea>
          <button type="submit">
            <S.IconSendPlane />
            {"Send Mensage"}
          </button>
          <S.ContainerMenu>
            <Menu selected={"contact"} />
          </S.ContainerMenu>
        </S.BoxForm>
        <S.BigTextBox>
          <S.Text>
            {"Let’s"} <S.Text colorText={"#00c78b"}>{"create"}</S.Text>
            {" something cool together"}
          </S.Text>
          <S.ContainerContact>
            <S.Button>
              <S.IconEmail />
              {"contato@juanamaral.com.br"}
            </S.Button>
            <S.Button>
              <S.IconPhone />
              {"+55 62 99291 1658"}
            </S.Button>
            <S.Button>
              <S.IconLocation />
              {"Brazil to the whole world"}
            </S.Button>
          </S.ContainerContact>

          <S.ConstainerSocial>
            <SocialNetwork />
          </S.ConstainerSocial>
        </S.BigTextBox>
        <S.ContainerArrow onClick={() => goPage(3)}>
          <Image
            style={{ transform: "scaleX(-1)" }}
            src={arrow}
            alt="arrow right"
            width="30"
            height="30"
          ></Image>
        </S.ContainerArrow>
      </S.ContainerBox>

      <Copyright />
    </S.Container>
  );
}
