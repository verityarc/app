export default function CheckEmailPage() {
  return (
    <main style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
      <h1>Check your email</h1>
      <p>
        We sent you a confirmation link. Click it to verify your email, then come back and log in.
      </p>
      <p>
        <a href="/login">Go to login</a>
      </p>
    </main>
  );
}
