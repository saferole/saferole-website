import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  monthlySalary: z.number().optional(),
  company: z.string().optional(),
});

// In-memory store for MVP (no database yet)
const waitlist: Array<{ email: string; name: string; monthlySalary?: number; company?: string; createdAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    if (waitlist.some((e) => e.email === data.email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    waitlist.push({ ...data, createdAt: new Date().toISOString() });
    return NextResponse.json({ success: true, position: waitlist.length });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
