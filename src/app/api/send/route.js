import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_NXpBJXHk_7YCtjkUcUaJTKX42aA8snRf8')

export async function POST(request) {
  
  try {
    const {subject, message, email } = await request.json()
  
    const emailContent = `
    <div>
      <h1>${subject} </h1>
      <p>${message}</p>
      <p>from: ${email}</p>
    </div>
    `

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['cris.treachi@gmail.com'],
      subject: 'Portfolio email',
      html: emailContent
    });


    if (data.error) {
      return NextResponse.json({ error:data.error }, { status: 500 });
    }

    return NextResponse.json({message: 'Email send'}, {
      status:200,
    })

  } catch (error) {

    return NextResponse.json(
      { message: error.message }, 
      { status: 500 }
    );
  }
}
