/*  
    Next js 13  hot-reloading can cause bunch of this new Prisma client instances in line 9 and this gives us a warning
    in the terminal. With this code , it is not affected by next js hot reload. This is best practice for using Prisma
    with next 13.
 */
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
