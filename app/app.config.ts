export default defineAppConfig({
  siteName: "Kilmer Construction LLC",
  ui: {
    colors: {
      primary: "red",
      secondary: "yellow",
      neutral: "stone",
    },
    card: {
      slots: {
        root: "rounded-none overflow-hidden ring ring-default",
      },
    },
    button: {
      slots: {
        base: "rounded-none !py-[10px] font-medium inline-flex items-center cursor-pointer disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors",
      },
    },
    input: {
      slots: {
        base: "rounded-none",
      },
    },
    textarea: {
      slots: {
        base: "rounded-none",
      },
    },
  },
});
