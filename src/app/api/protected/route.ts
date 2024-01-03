import { IsUserExists } from "@/lib/helper";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

const handler = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "ok" }, { status: 200 });
};

export const GET = withApiAuthRequired(handler);
