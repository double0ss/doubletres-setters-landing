import nodemailer from 'nodemailer';

export async function post({ request }) {
  try {
    const form = await request.formData();
    const nombre = form.get('nombre') || 'Sin nombre';
    const empresa = form.get('empresa') || '-';
    const email = form.get('email') || '-';
    const whatsapp = form.get('whatsapp') || '-';
    const setter = form.get('setter') || '-';

    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT || 587;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!host || !user || !pass) {
      return new Response(JSON.stringify({ ok:false, error:'SMTP no configurado. Revisa .env' }), { status:500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass }
    });

    const info = await transporter.sendMail({
      from: `"DoubleTres" <${user}>`,
      to,
      subject: `Nueva consultoría: ${nombre}`,
      html: `<h3>Nueva consulta desde landing (setter: ${setter})</h3>
             <p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>WhatsApp:</strong> ${whatsapp}</p>`
    });

    return new Response(JSON.stringify({ ok:true, message:'Email enviado', info }), { status:200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok:false, error: String(err) }), { status:500 });
  }
}
