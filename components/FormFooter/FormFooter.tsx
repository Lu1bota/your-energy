"use client";

import { createSubscription, FormType } from "@/lib/api";
import css from "./FormFooter.module.css";
import toast from "react-hot-toast";

export default function FormFooter() {
  async function handleSubmit(formData: FormData) {
    const formValues = Object.fromEntries(formData);
    const requestBody: FormType = {
      email: formValues.email.toString(),
    };

    try {
      const res = await createSubscription(requestBody);
      toast.success(res.message);
    } catch {
      toast.error(
        "An error occurred while subscribing. Please try again later or check your email address."
      );
    }
  }

  return (
    <form action={handleSubmit} className={css.form}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={css.input}
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        required
      />
      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}
