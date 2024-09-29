import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function sendEmail(req, res) {
  try {
    const data = req.body;

    await resend.sendEmail({
      from: "ironkwe.site <website@ironkwe.site>",
      to: "samironkwe@gmail.com",
      replyTo: data.email,
      subject: `${data.name} - via ironkwe.site`,
      react: <div> {data.message} </div>,
    });

    res.status(200).json({ message: "Email sent" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
