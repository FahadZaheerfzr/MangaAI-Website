import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      boxShadow: {
        custom: '0px 1px 20px #524656', // Define your custom drop shadow here
      },
      fontWeight: {
        custom5: '500',
        custom6: '600',
        custom7: '700',
        custom8: '800',
        custom9: '900',
        custom4: '400', // You can set the value to your desired font weight
      },
      backgroundImage: {
        // Your existing custom background images
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'text-gradient':'var(--text-gradient, linear-gradient(90deg, #8F41B4 5.67%, #7D98A6 46.92%, #50C355 91.76%))',
      },
      colors: {
        // Your existing custom colors
        'main-gray': '#262420',
        'main-gray-light': '#2A2A2A',
        'main-gray-lighter': '#3D3D3D',
        'main-purple': '#2D2238',
        'main-purple-dark': '#22162B',
        'main-purple-light': '#3E2D5A', 
      },
    },
  },
}
export default config
