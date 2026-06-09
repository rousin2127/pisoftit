const FORM_ENDPOINT = `https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL || 'paisoft6@gmail.com'}`;

export async function sendContactMessage({ name, email, phone, service, message }) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      phone: phone || 'Not provided',
      service,
      message,
      _subject: `New inquiry from ${name} — PAISOFT IT Website`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Unable to send message. Please try again or email us directly.');
  }

  return data;
}

export async function subscribeNewsletter(email) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      _subject: 'Newsletter subscription — PAISOFT IT',
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Subscription failed. Please try again.');
  }

  return data;
}
