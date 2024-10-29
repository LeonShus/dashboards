import { NextResponse } from "next/server";
import { UserApi } from "../users";

export async function POST(request) {
  const res = await request.json();

  const {name, email} = res

  const result = await UserApi.createUser({name, email})

  console.log({res})

  return NextResponse.json({ data: result });
}
