'use client'; 

// app/register/page.tsx
import AuthForm from "@/components/authForm";

export default function RegisterPage() {
  return (
    <AuthForm
      mode="register"
      buttonText="Account erstellen"
      successMessage="Account erstellt! Du wirst weitergeleitet..."
      linkText="Einloggen"
      linkHref="/login"
    />
  );
}
