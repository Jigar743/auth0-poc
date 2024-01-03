import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const IsUserExists = (
  handler: (req: Request, res: Response) => void
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await getSession(req, res);

      if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Continue with the provided handler
      return handler(req, res);
    } catch (error) {
      console.error("Error checking user:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  };
};

export const publicRoutes = ["/"];
export const protectedRoutes = ["/profile"];
