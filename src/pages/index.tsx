import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { Header } from 'src/features/Header'
import { TopBar } from 'src/features/TopBar'
import { Category } from 'src/features/Category'
import { BannerCarousel } from 'src/features/BannerCarousel'
import { Benefits } from 'src/features/Benefits'
import { Partners } from 'src/features/Partners'
import { Products } from 'src/features/Products'
import { CollectionBanner } from 'src/features/CollectionBanner'
import { Newsletter } from 'src/features/Newsletter'
import { Information } from 'src/features/Information'
import Footer from 'src/features/Footer'
import { Modal } from 'src/features/Newsletter/Modal'

const Landing = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setShowModal(false)

  return (
    <Box>
      <TopBar />
      <Header />
      <Category />

      <BannerCarousel />
      <Benefits />
      <Partners />

      <Products />

      <CollectionBanner />

      <Newsletter />
      <Modal open={showModal} onClose={handleClose} />

      <Information />

      <Footer />
    </Box>
  )
}

export default Landing
