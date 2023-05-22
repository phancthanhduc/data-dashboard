import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/api/auth/signin",
        signOut: "/api/auth/signout",
        error: "/api/auth/error",
        verifyRequest: "/api/auth/verifyrequest",
        newUser: "/api/auth/newuser",
    },
});
