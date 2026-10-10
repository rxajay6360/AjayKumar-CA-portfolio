import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_nlnrf0v",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  recipientEmail: "rxajay9196@gmail.com",
};

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  details: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { serviceId, templateId, publicKey, recipientEmail } = EMAILJS_CONFIG;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "MISSING_CONFIG: EmailJS templateId or publicKey is not set."
    );
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    service: data.service,
    budget: data.budget,
    message: data.details,
    submission_time: new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    to_email: recipientEmail,
  };

  const response = await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey
  );

  return response;
}
