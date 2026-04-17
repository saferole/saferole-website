import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  companyName: z.string().min(2),
  email: z.string().email(),
  companySize: z.string().optional(),
  message: z.string().optional(),
});

// In-memory store for MVP (no database yet)
const leads: Array<{ companyName: string; email: string; companySize?: string; message?: string; createdAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    if (leads.some((e) => e.email === data.email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    leads.push({ ...data, createdAt: new Date().toISOString() });
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
