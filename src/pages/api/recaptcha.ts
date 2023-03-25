import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // reCAPTCHA認証サーバーに認証リクエストをPOSTし、認証結果を受け取る
  const serverSecretKey = `secret=${process.env.RECAPTCHA_SERVER_SECRET_KEY}&response=${req.body.token}`;
  const responceRecaptcha = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: serverSecretKey,
    }
  );
  const recaptchaResult = await responceRecaptcha.json();

  if (!recaptchaResult.success) {
    res.status(500).json({ error: "recaptcha failed" });
  }

  res.status(200).json({ text: "recaptcha success" });
}
