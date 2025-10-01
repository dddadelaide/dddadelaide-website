import React, { Fragment, useEffect } from 'react'
import { Footer } from 'components/global/Footer/footer'
import { Meta } from 'components/global/meta'
import { SkipToContent } from 'components/SkipToContent/SkipToContent'
import { NavigationProvider } from 'components/global/Nav/Nav.context'
import { TestingControl } from 'components/TestingControl/TestingControl'
import { Header } from 'components/global/Header/Header'
import { Nav } from 'components/global/Nav/Nav'
import Menu from 'config/menu'
import { ActionBar } from 'components/ActionBar/ActionBar'
import { Hero } from 'components/Hero/hero'
import { useConfig } from 'Context/Config'
import { StyledPageBanner } from 'components/PageBanner/PageBanner.styled'

export interface TemplateProps {
  title: string
  fullTitle?: string
  description?: string
  image?: string
  showHero?: boolean
  children?: React.ReactNode
  showActionBar?: boolean
  pageBanner?: string
  hideMailingList?: boolean
}

export const Template = ({
  children,
  title,
  fullTitle,
  description,
  image,
  showHero,
  showActionBar = true,
  pageBanner = null,
  hideMailingList = false,
}: TemplateProps): JSX.Element => {
  const { conference, appConfig, dates } = useConfig()
  const menu = Menu(conference, dates)

  useEffect(() => {
    if (!hideMailingList) {
      // Remove existing script if present to avoid duplicates
      const existingScript = document.querySelector('script[data-form="78f46ea2-4b21-11f0-95a4-3de79b22cc0e"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Create and append the script
      const script = document.createElement('script')
      script.src = 'https://eocampaign1.com/form/78f46ea2-4b21-11f0-95a4-3de79b22cc0e.js'
      script.async = true
      script.setAttribute('data-form', '78f46ea2-4b21-11f0-95a4-3de79b22cc0e')
      document.getElementById('mailing-list-container')?.appendChild(script)

      return () => {
        // Cleanup: remove script on unmount
        script.remove()
      }
    }
  }, [hideMailingList])

  return (
    <Fragment>
      <Meta pageTitle={title} pageFullTitle={fullTitle} pageDescription={description} pageImage={image} />
      <SkipToContent />
      <NavigationProvider>
        <Header />
        <Nav menu={menu.Top} />
      </NavigationProvider>
      {showActionBar && <ActionBar />}
      {showHero && <Hero />}
      {pageBanner && <StyledPageBanner bannerImage={pageBanner} />}
      {children}
      {!hideMailingList && (
        <div style={{ margin: '0 auto', textAlign: 'center', paddingBottom: '10px' }}>
          <h2>Mailing List</h2>
          <div id="mailing-list-container"></div>
        </div>
      )}
      <Footer />
      {appConfig.testingMode() && <TestingControl />}
    </Fragment>
  )
}
