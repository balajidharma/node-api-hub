import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins"
import { PrismaPg } from '@prisma/adapter-pg'
import { prismaAdapter } from "better-auth/adapters/prisma";
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
    user: {
        modelName: "users",
        fields: {
            emailVerified: "email_verified",
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    account: {
        modelName: "accounts",
        fields: {
            accountId: "account_id",
            providerId: "provider_id",
            userId: "user_id",
            accessToken: "access_token",
            refreshToken: "refresh_token",
            idToken: "id_token",
            accessTokenExpiresAt: "access_token_expires_at",
            refreshTokenExpiresAt: "refresh_token_expires_at",
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    session: {
        modelName: "sessions",
        fields: {
            expiresAt: "expires_at",
            createdAt: "created_at",
            updatedAt: "updated_at",
            ipAddress: "ip_address",
            userAgent: "user_agent",
            userId: "user_id"
        },
    },
    verification: {
        modelName: "verifications",
        fields: {
            expiresAt: "expires_at",
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    plugins: [
        username({
            schema: {
                user: {
                    fields: {
                        displayUsername: "display_username",
                    },
                },
            },
        }),
    ],
});
