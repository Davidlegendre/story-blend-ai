import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import { createUserHandler } from './src/lib/Helpers/Handlers/createUser'

export default defineConfig({
    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({user}){
            await createUserHandler(user)
            return true
        }
    }
})
