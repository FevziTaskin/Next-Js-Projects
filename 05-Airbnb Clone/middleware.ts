// To protect the routes from unauthorized user
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};
