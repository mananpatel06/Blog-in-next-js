// protect website from direct url access

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    // creating token

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },

    // adding data in seession

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth, request }) {
        // console.log(" sessions  =", auth);

      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // only admin can access admin page

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // only users can access blog page

      if (isOnBlogPage && !user) {
        return false;
      }

      // login user don't see login page

      if (isOnLoginPage && user) {

        // using redirect to send user on home page if user try to access login page

        return Response.redirect(new URL("/", request.nextUrl));
      }

    //   for any other page user can aacess
    // if return is false then for other pages it redirects "/login" written in pages at top
      return true;
    },
  },
};
