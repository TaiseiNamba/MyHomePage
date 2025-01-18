import React, { useState } from "react";
import "./Contact_1.css";

function Contact() {
  // ステートの管理
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // フォーム送信の処理
  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォームデータの準備
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    // PHPサーバーにフォームデータを送信
    try {
      const response = await fetch("send_email.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("メールが送信されました！");
      } else {
        alert("メール送信に失敗しました。");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("メール送信中にエラーが発生しました。");
    }
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="submit" type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
