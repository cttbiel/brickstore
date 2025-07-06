import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Preencha todos os campos." },
      { status: 400 }
    );
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { error: "E-mail já cadastrado." },
      { status: 400 }
    );
  }
  const hashedPassword = await hash(password, 10);
  await prisma.user.create({
    data: { name, email, hashedPassword },
  });
  return NextResponse.json({ ok: true });
}
