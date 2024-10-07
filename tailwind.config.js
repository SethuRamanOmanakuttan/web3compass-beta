module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        "retro-black": "#111111",
        "retro-white": "#FFFEF2",
        "retro-accent": "#FFA726",
      },
      fontFamily: {
        retro: ["Roboto Condensed", "monospace"],
        Tourney: ["Tourney", "sans-serif"],
      },
      boxShadow: {
        retro: "4px 4px 0 #111111",
        "retro-sm": "2px 2px 0 #111111",
        "retro-lg": "6px 6px 0 #111111",
      },
      borderWidth: {
        3: "3px",
      },
      typography: (theme) => ({
        retro: {
          css: {
            "--tw-prose-body": theme("colors.gray.800"),
            "--tw-prose-headings": theme("colors.retro-black"),
            "--tw-prose-links": theme("colors.retro-accent"),
            "--tw-prose-bold": theme("colors.retro-black"),
            "--tw-prose-counters": theme("colors.retro-accent"),
            "--tw-prose-bullets": theme("colors.retro-accent"),
            "--tw-prose-hr": theme("colors.retro-black"),
            "--tw-prose-quote-borders": theme("colors.retro-accent"),
            "--tw-prose-captions": theme("colors.gray.600"),
            "--tw-prose-code": theme("colors.retro-black"),
            "--tw-prose-code-bg": theme("colors.retro-white"),
            "--tw-prose-pre-code": theme("colors.retro-white"),
            "--tw-prose-pre-bg": theme("colors.retro-black"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
