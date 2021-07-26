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
      <article className="contact-form">
        <div className="horizontal-line contact-form__horizontal-line " />
        <h2 className="title contact-form__title">Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form__form">
          {/* 
            Name
            email
            message
            submit
            */}
          {/* Name */}
          <div className="form-elements">
            <label
              htmlFor="name"
              className="form-elements__label contact-form__label"
            >
              Name
            </label>
            <input
              {...register("name")}
              className="form-elements__input contact-form__name"
              placeholder="Jane Appleseed"
            />
            <p className="form-elements__error contact-form__error">
              {errors.name?.message}
            </p>
          </div>

          {/* email */}
          <div className="form-elements">
            <label
              htmlFor="email"
              className="form-elements__label contact-form__label contact-form__label-email"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="form-elements__input contact-form__email "
              placeholder="email@example.com"
            />
            <p className="form-elements__error contact-form__error">
              {errors.email?.message}
            </p>
          </div>

          {/* message */}
          <div className="form-elements">
            <label
              htmlFor="message"
              className="contact-form__input-label contact-form__label-message"
            >
              Message
            </label>
            <input
              {...register("message")}
              className="form-elements__input  form-elements__input-message"
              placeholder="How can I help?"
            />
            <p className="form-elements__error ">{errors.message?.message}</p>
          </div>

          {/* submit */}
          <button
            type="submit"
            className=" button button-primary-normal button__text form-elements__submit"
          >
            Send Message
          </button>
        </form>
      </article>
    </article>
  );
};

export default ContactMe;
