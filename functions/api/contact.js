export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Rely on SQLite DEFAULT TIMESTAMP or DATETIME for auto-population
    await env.ankushshingari_db.prepare(`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `).bind(name, email, subject, message).run();

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || 'Server error processing submission.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}