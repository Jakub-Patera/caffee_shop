import WindiCSS from "vite-plugin-windicss";


export default {
  plugins: [WindiCSS()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        raleway: ["Raleway", "sans-serif"],
        coffeeservice: ["coffee-service", "sans-serif"],
        mono: ["coffee-service", "SFMono-Regular"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
    },
  },
};
