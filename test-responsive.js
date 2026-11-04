const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  
  try {
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║       TESTING CONCERT PHOTOGRAPHY WEBSITE             ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');

    // Test on mobile 375px
    console.log('=== MOBILE (375px) ===\n');
    const mobilePage = await browser.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 667 });
    
    const htmlPath = 'file://' + path.resolve('D:\\Git\\harrietarnold.github.io.git\\index.html');
    console.log('Loading: ' + htmlPath);
    
    await mobilePage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(1000);
    
    // Check responsive elements
    const navbar = await mobilePage.locator('.navbar');
    const navContainer = await mobilePage.locator('.nav-container');
    const navBrand = await mobilePage.locator('.nav-brand');
    const navLinks = await mobilePage.locator('.nav-links');
    
    console.log('Elements visibility:');
    console.log('  Navbar: ' + await navbar.isVisible());
    console.log('  Nav container: ' + await navContainer.isVisible());
    console.log('  Nav brand (logo): ' + await navBrand.isVisible());
    console.log('  Nav links: ' + await navLinks.isVisible());
    
    // Check navbar width
    const navBox = await navbar.boundingBox();
    console.log('\nNavbar dimensions:');
    console.log('  Width: ' + navBox?.width + 'px');
    console.log('  Height: ' + navBox?.height + 'px');
    
    // Check nav links positioning
    const navLinksBox = await navLinks.boundingBox();
    console.log('\nNav links:');
    console.log('  Count: ' + await mobilePage.locator('.nav-links li').count());
    console.log('  Width: ' + navLinksBox?.width + 'px');
    console.log('  Height: ' + navLinksBox?.height + 'px');
    
    // Check for overflow
    const navContainerBox = await navContainer.boundingBox();
    console.log('\nNav container:');
    console.log('  Width: ' + navContainerBox?.width + 'px');
    
    // Test hero section
    console.log('\n=== HERO SECTION ===\n');
    const hero = await mobilePage.locator('.hero');
    const heroTitle = await mobilePage.locator('.hero-title');
    const heroSubtitle = await mobilePage.locator('.hero-subtitle');
    
    const heroBox = await hero.boundingBox();
    const heroTitleBox = await heroTitle.boundingBox();
    
    console.log('Hero section:');
    console.log('  Visible: ' + await hero.isVisible());
    console.log('  Width: ' + heroBox?.width + 'px');
    console.log('  Height: ' + heroBox?.height + 'px');
    console.log('\nHero title:');
    console.log('  Font size: ' + await heroTitle.evaluate(el => window.getComputedStyle(el).fontSize));
    console.log('  Width: ' + heroTitleBox?.width + 'px');
    
    // Test artists grid
    console.log('\n=== ARTISTS GRID ===\n');
    const artistsGrid = await mobilePage.locator('.artists-grid');
    const artistCards = await mobilePage.locator('.artist-card');
    
    const gridBox = await artistsGrid.boundingBox();
    const cardCount = await artistCards.count();
    
    console.log('Artists grid:');
    console.log('  Card count: ' + cardCount);
    console.log('  Grid width: ' + gridBox?.width + 'px');
    
    // Check card sizes
    if (cardCount > 0) {
      const firstCard = artistCards.first();
      const cardBox = await firstCard.boundingBox();
      console.log('\nFirst artist card:');
      console.log('  Width: ' + cardBox?.width + 'px');
      console.log('  Height: ' + cardBox?.height + 'px');
    }
    
    // Check about section layout
    console.log('\n=== ABOUT SECTION ===\n');
    const aboutContent = await mobilePage.locator('.about-content');
    const aboutContentBox = await aboutContent.boundingBox();
    
    const gridTemplate = await aboutContent.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    console.log('About section:');
    console.log('  Grid template: ' + gridTemplate);
    console.log('  Width: ' + aboutContentBox?.width + 'px');
    
    // Check for text overflow issues
    console.log('\n=== TEXT & OVERFLOW CHECK ===\n');
    const textElements = await mobilePage.locator('h2, h3, p');
    let overflowCount = 0;
    
    const count = await textElements.count();
    for (let i = 0; i < Math.min(count, 10); i++) {
      const element = textElements.nth(i);
      const box = await element.boundingBox();
      const scrollWidth = await element.evaluate(el => el.scrollWidth);
      const clientWidth = await element.evaluate(el => el.clientWidth);
      
      if (scrollWidth > clientWidth) {
        overflowCount++;
        const text = await element.textContent();
        console.log('  Overflow: ' + text?.substring(0, 50));
      }
    }
    
    console.log('Total text overflow issues: ' + overflowCount);
    
    // Check footer
    console.log('\n=== FOOTER ===\n');
    await mobilePage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await mobilePage.waitForTimeout(500);
    
    const footer = await mobilePage.locator('.footer');
    const footerContent = await mobilePage.locator('.footer-content');
    
    console.log('Footer:');
    console.log('  Visible: ' + await footer.isVisible());
    console.log('  Flex direction: ' + await footerContent.evaluate(el => 
      window.getComputedStyle(el).flexDirection
    ));
    
    // Screenshot
    await mobilePage.screenshot({ path: '/tmp/mobile-375.png', fullPage: true });
    console.log('\n✓ Mobile screenshot saved');
    
    await mobilePage.close();
    
    // Test tablet
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║              TABLET (768px)                           ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    const tabletPage = await browser.newPage();
    await tabletPage.setViewportSize({ width: 768, height: 1024 });
    await tabletPage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
    await tabletPage.waitForTimeout(1000);
    
    const tabletCards = await tabletPage.locator('.artist-card');
    const tabletCardCount = await tabletCards.count();
    
    const tabletGrid = await tabletPage.locator('.artists-grid');
    const tabletGridBox = await tabletGrid.boundingBox();
    
    console.log('Artists grid (tablet):');
    console.log('  Card count visible: ' + tabletCardCount);
    console.log('  Grid width: ' + tabletGridBox?.width + 'px');
    
    if (tabletCardCount > 0) {
      const tabletFirstCard = tabletCards.first();
      const tabletCardBox = await tabletFirstCard.boundingBox();
      console.log('  First card width: ' + tabletCardBox?.width + 'px');
    }
    
    await tabletPage.screenshot({ path: '/tmp/tablet-768.png', fullPage: true });
    console.log('✓ Tablet screenshot saved');
    
    await tabletPage.close();
    
    // Test desktop
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║              DESKTOP (1400px)                         ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    const desktopPage = await browser.newPage();
    await desktopPage.setViewportSize({ width: 1400, height: 900 });
    await desktopPage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
    await desktopPage.waitForTimeout(1000);
    
    const desktopCards = await desktopPage.locator('.artist-card');
    const desktopCardCount = await desktopCards.count();
    
    const desktopGrid = await desktopPage.locator('.artists-grid');
    const desktopGridBox = await desktopGrid.boundingBox();
    
    console.log('Artists grid (desktop):');
    console.log('  Card count visible: ' + desktopCardCount);
    console.log('  Grid width: ' + desktopGridBox?.width + 'px');
    
    if (desktopCardCount > 0) {
      const desktopFirstCard = desktopCards.first();
      const desktopCardBox = await desktopFirstCard.boundingBox();
      console.log('  First card width: ' + desktopCardBox?.width + 'px');
    }
    
    await desktopPage.screenshot({ path: '/tmp/desktop-1400.png', fullPage: true });
    console.log('✓ Desktop screenshot saved');
    
    await desktopPage.close();
    
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║              TESTING COMPLETE                         ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
  } catch (error) {
    console.error('Error: ' + error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }
})();
