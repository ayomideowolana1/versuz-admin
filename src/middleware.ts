// apply route protection to the whole application
export { default } from "next-auth/middleware"

// apply route protection to some routes
export const config = {matcher:["/api","/event","/welcome"]}