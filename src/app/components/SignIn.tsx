"use client";
import resendLogin from "@/server/actions/resend-login";
import { useActionState } from "react";

export default function SignIn() {
  const [errorMessage, formAction, isPending] = useActionState(
    resendLogin,
    undefined
  );
  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Enter your email address" />
      <button type="submit" aria-disabled={isPending}>
        Sign in with Resend
      </button>
      {errorMessage && <p className="errortext">{errorMessage}</p>}
    </form>
  );
}
