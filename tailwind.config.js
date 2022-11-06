/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
   screens:{
      
    sm:'400px',
    md:'750px',
    lg:'976px',
    xl:'1440px',


   },
  
    extend: {
      color:{
    darkgrayishblue:'hsl(227, 12%, 61%)',
   
  },
    
  }, 
  },
  plugins: [],
}
