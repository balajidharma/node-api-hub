import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins"
import { PrismaPg } from '@prisma/adapter-pg'
import { prismaAdapter } from "better-auth/adapters/prisma";
//import { PrismaClient } from "../../../../database/prisma-pg/src/index";
import { PrismaClient } from "@database/prisma-pg";

const adapter = new PrismaPg({ connectionString: process.env['POSTGRES_DATABASE_URL'] })
const prisma = new PrismaClient({ adapter })

export const auth = betterAuth({
    advanced: {
        disableOriginCheck: process.env['NODE_ENV'] !== 'production',
        database: {
            generateId: 'uuid'
        }
    },
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({user, url, token}, request) => {
            // await sendEmail({
            //     to: user.email,
            //     subject: "Reset your password",
            //     text: `Click the link to reset your password: ${url}`,
            // });
        },
        onPasswordReset: async ({ user }, request) => {

        },
    },
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    plugins: [
        username()
    ]
});
