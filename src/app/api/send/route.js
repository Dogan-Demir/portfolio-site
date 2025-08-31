import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const { email, subject, message } = await req.json();
    
    if (!email || !subject || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      console.log('Attempting to send email with data:', {
        to: "dogandemirdev@gmail.com",
        subject: subject,
        email: email
      });

      const data = await resend.emails.send({
        from: "Contact Form <contact@pulsedevelopment.uk>",
        to: ["dogandemir2004@gmail.com"],
        reply_to: email,
        subject: subject,
        html: `
          <h2>Message from Portfolio Contact Form</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      console.log('Resend API response:', data);

      if (data && data.data && data.data.id) {
        return Response.json({ success: true, messageId: data.data.id }, { status: 200 });
      } else {
        console.error('No message ID received from Resend');
        return Response.json({ error: "Email not sent properly" }, { status: 500 });
      }
    } catch (error) {
      console.error("Resend API Error:", error);
      return Response.json(
        { error: "Failed to send email: " + error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request Processing Error:", error);
    return Response.json(
      { error: "Invalid request: " + error.message },
      { status: 400 }
    );
  }
}