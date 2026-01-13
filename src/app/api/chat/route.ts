import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL_NAME = "llama-3.1-8b-instant";

const ROLE_PROMPTS: Record<string, string> = {
  "Frontend Developer": "You are an expert Frontend Developer proficient in React, Vue, CSS, and modern web design principles. Answer questions focusing on UI/UX, responsiveness, and frontend frameworks.",
  "Backend Developer": "You are an expert Backend Developer skilled in Python, Node.js, databases, and API design. Focus your answers on server-side logic, data structures, and system architecture.",
  "Infra Manager": "You are a DevOps and Infrastructure Manager expert in Docker, Kubernetes, CI/CD, and cloud platforms. Provide advice on deployment, scalability, and system reliability.",
  "HR": "You are a Human Resources representative. You are professional, empathetic, and knowledgeable about company policies, conflict resolution, and employee well-being."
};

export async function POST(request: NextRequest) {
  try {
    const { role, message } = await request.json();

    if (!role || !message) {
      return NextResponse.json(
        { error: "Role and message are required" },
        { status: 400 }
      );
    }

    if (!ROLE_PROMPTS[role]) {
      return NextResponse.json(
        { error: "Invalid role selected" },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = ROLE_PROMPTS[role];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      return NextResponse.json(
        { error: `Groq API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Return streaming response
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
