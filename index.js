tailwind.config = {
  theme: {
    fontFamily: {
      'roboto': ['Roboto, sans-serif'],
    },
      fontSize: {
          h1: ['3rem', {
          lineHeight: '3.6rem',
          fontWeight: '400',
        }],
        p24: ["1rem", {
          lineHeight: '1.3rem',
          fontWeight: '400',
        }],
        h4: ['1.5rem', {
          lineHeight: '1.8rem',
          fontWeight: '400',
        }],
        fs24: ['1.5rem', {
          lineHeight: '1.8rem',
          fontWeight: '400',
        }],
        p16: ['1rem', {
          lineHeight: '1.3rem',
          fontWeight: '500',
        }],
        t36: ['2.25rem', {
          lineHeight: '2.9rem',
          fontWeight: '400',
        }],
        t15: ['0.9375rem', {
          lineHeight: '1.125rem',
          fontWeight: '300',
        }],
        t16: ['1rem', {
          lineHeight: '1.3rem',
          fontWeight: '100',
        }],

      },
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/Images/Panda.png')",
        },
        spacing: {
          '378px': '378px',
        },

        height: {
          '700': '46rem',
          '186': '12rem'
        },
          container: {
              center: true,
              padding: {
                  DEFAULT: '1rem',
                  sm: '2rem',
                  lg: '3rem',
                  md: "4rem",
                  xl: '4rem',
                  '2xl': '5rem',
                  '3xl': '6rem',
              },
              screens: {
                  'xsm': "370px",
                  'sm': "504px",
                  'md': "688px",
                  'lg': "864px",
                  'xl': "1088px",
                  "2xl": "1260px",
                  "3xl": "1392px"
              }
          }
      },
      screens: {
          'xs': "0",
          'xsm': "370px",
          'sm': "504px",
          'md': "688px",
          'lg': "864px",
          'xl': "1088px",
          "2xl": "1260px",
          "3xl": "1392px",
      },
      // screens: {
      //     "3xl": { max: "1440px" },
      //     "2xl": { max: "1130px" },
      //     xl: { max: "960px" },
      //     lg: { max: "768px" },
      //     md: { max: "560px" },
      //     sm: { max: "440px" },
      //     xsm: { max: "370px" }
      // },

      colors: {
        "text-fff": "#FFFFFF",
        "text-d41": "#333B41",
        "orange": '#FE9013',
        "orange-gr": "#FCCEB1",
        "t-474": "#767474",
        "t-200": " #4B9200",
        "h-209": "#E47209",
        "p-B4": "#FCCDB4",
        "bg-6db": "#FDE6DB",
        "bg-3f2": "#F1F3F2",
        "t-dbd": " #BDBDBD",
      },
     
     

  }
}