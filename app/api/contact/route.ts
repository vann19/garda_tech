import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nama, email, dan pesan wajib diisi.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Konfigurasi email server belum diatur.' },
        { status: 500 }
      );
    }

    // Send email using Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Garda Tech Contact <onboarding@resend.dev>',
        to: 'gardatech765@gmail.com',
        subject: `[Garda Tech] ${subject || 'Pertanyaan Baru'} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e9eaec; border-radius: 12px; padding: 24px; background-color: #ffffff;">
            <h2 style="color: #7c3aed; margin-top: 0; border-bottom: 2px solid #f4f5f7; padding-bottom: 12px;">Pesan Baru Dari Klien</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 140px;">Nama Pengirim:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">No. Telp (WA):</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Subjek / Layanan:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: bold;">${subject || '-'}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <h4 style="margin-top: 0; color: #4b5563; margin-bottom: 8px;">Pesan / Detail Kebutuhan:</h4>
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #f4f5f7; margin-top: 24px; margin-bottom: 16px;" />
            
            <p style="font-size: 11px; color: #9ca3af; margin: 0; text-align: center;">
              Email ini dikirim secara otomatis oleh sistem formulir Garda Tech.
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API Error:', errorData);
      return NextResponse.json(
        { error: 'Gagal mengirim email melalui penyedia.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact Form Route Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan tidak terduga.' },
      { status: 500 }
    );
  }
}
