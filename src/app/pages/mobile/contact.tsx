import * as S from "../style.ts/mobileContact/style";
import SocialNetworkMobile from "../components/socialNetworkMobile";
import Copyright from "../components/copyright";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function ContactMobile() {
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
    <S.Container id="contact">
      <S.ContainerBox>
        <S.BoxForm ref={form} onSubmit={sendEmail}>
          <S.Text>
            {"Let’s"} <S.Text colorText={"#00c78b"}>{"create"}</S.Text>
            {" something cool together"}
          </S.Text>
          <S.Input placeholder="Your name" name="user_name"></S.Input>
          <S.Input placeholder="Your e-mail" name="user_email"></S.Input>
          <S.Textarea placeholder="Your message" name="message"></S.Textarea>
          <button type="submit">
            <S.IconSendPlane />
            {"Send Mensage"}
          </button>
        </S.BoxForm>
      </S.ContainerBox>
      <SocialNetworkMobile />
      <Copyright />
    </S.Container>
  );
}
