import React, { useRef } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvents = ({ data }) => {
  const inputEmail = useRef();
  console.log(inputEmail);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch(`/api/email-registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("POST", data);
      //Post fetch request here

      //emailvalue and event id
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>

      <form onSubmit={onSubmit} className="email_registration">
        <label htmlFor="">Get registered for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvents;
