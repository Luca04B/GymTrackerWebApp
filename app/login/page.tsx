'use client'; 

// app/login/page.tsx
import AuthForm from "@/components/authForm";

export default function LoginPage() {
  return (
    <AuthForm
      mode="login"
      buttonText="Einloggen"
      successMessage="Login erfolgreich!"
      linkText="Registrieren"
      linkHref="/register"
    />
  );
}
