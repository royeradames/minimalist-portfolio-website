import React from "react";
import SocialMedia from "./SocialMedia";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// schema
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required().min(10),
});
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    //   this data can be send with axios to a server
    console.log(data);
  };

  return (
    <article className="contact-page">
      <article className="contact-message">
        <div className="horizontal-line contact-message__horizontal-line contact-message__horizontal-line-first" />
        <h2 className="title contact-message__title">Get in Touch</h2>
        <p className="message-s contact-message__message">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
        <SocialMedia page="contact-message" />
      </article>
    </article>
  );
};

export default ContactMe;
