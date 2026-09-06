// import './App.css'
// import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

// function App() {
//   return (
//     <>
//       <header>
//         <Show when="signed-out">
//           <SignInButton />
//           <SignUpButton />
//         </Show>
//         <Show when="signed-in">
//           <UserButton />
//         </Show>
//       </header>
//     </>
//   )
// }

// export default App



import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ComparisonTable from './components/ComparisonTable'
import Testimonials from './components/Testimonials'
import OrderSection from './components/OrderSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ComparisonTable />
      <Testimonials />
      <OrderSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
