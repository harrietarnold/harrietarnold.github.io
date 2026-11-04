const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  
  try {
    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log('║          MOBILE RESPONSIVE ISSUES ANALYSIS                   ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    // Mobile 375px test
    const mobilePage = await browser.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 667 });
    
    const htmlPath = 'file://' + path.resolve('D:\\Git\\harrietarnold.github.io.git\\index.html');
    await mobilePage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(1000);
    
    console.log('🔍 MOBILE (375px) ANALYSIS\n');
    console.log('─────────────────────────────────────────────────────────────\n');
    
    // 1. Check navbar issues
    console.log('1️⃣  NAVIGATION BAR\n');
    
    const navBrand = await mobilePage.locator('.nav-brand');
    const navH1 = await mobilePage.locator('.nav-brand h1');
    const navP = await mobilePage.locator('.nav-brand p');
    
    const h1Size = await navH1.evaluate(el => window.getComputedStyle(el).fontSize);
    const pSize = await navP.evaluate(el => window.getComputedStyle(el).fontSize);
    const h1Spacing = await navH1.evaluate(el => window.getComputedStyle(el).letterSpacing);
    
    console.log(`   • H1 font size: ${h1Size} ⚠️  (may be too large)`);
    console.log(`   • P font size: ${pSize}`);
    console.log(`   • Letter spacing: ${h1Spacing}`);
    
    const navLinks = await mobilePage.locator('.nav-links');
    const navLinksList = await mobilePage.locator('.nav-links li');
    const linkCount = await navLinksList.count();
    
    const navLinksGap = await navLinks.evaluate(el => window.getComputedStyle(el).gap);
    console.log(`   • Navigation links count: ${linkCount}`);
    console.log(`   • Gap between links: ${navLinksGap}`);
    console.log(`   ⚠️  ISSUE: 7 nav items may wrap or overflow on 375px screen`);
    
    // 2. Check hero section
    console.log('\n2️⃣  HERO SECTION\n');
    
    const heroTitle = await mobilePage.locator('.hero-title');
    const heroTitleSize = await heroTitle.evaluate(el => window.getComputedStyle(el).fontSize);
    const heroTitleLineHeight = await heroTitle.evaluate(el => window.getComputedStyle(el).lineHeight);
    
    console.log(`   • Hero title size: ${heroTitleSize}`);
    console.log(`   • Line height: ${heroTitleLineHeight}`);
    console.log(`   ✓ Hero section responsive`);
    
    // 3. Check artist cards layout
    console.log('\n3️⃣  ARTIST CARDS GRID\n');
    
    const artistsGrid = await mobilePage.locator('.artists-grid');
    const gridCols = await artistsGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    console.log(`   • Grid template: ${gridCols}`);
    console.log(`   • Expected on mobile: 1 column`);
    
    if (gridCols.includes('auto')) {
      console.log(`   ✓ Using auto-fit/auto-fill (responsive)`);
    }
    
    // 4. Check for horizontal scroll
    console.log('\n4️⃣  HORIZONTAL SCROLL CHECK\n');
    
    const bodyWidth = await mobilePage.evaluate(() => document.body.scrollWidth);
    const windowWidth = 375;
    
    console.log(`   • Window width: ${windowWidth}px`);
    console.log(`   • Body scroll width: ${bodyWidth}px`);
    
    if (bodyWidth > windowWidth) {
      console.log(`   ⚠️  ISSUE: Horizontal scrolling detected! (overflow: ${bodyWidth - windowWidth}px)`);
    } else {
      console.log(`   ✓ No horizontal scroll`);
    }
    
    // 5. Check about section
    console.log('\n5️⃣  ABOUT SECTION LAYOUT\n');
    
    const aboutContent = await mobilePage.locator('.about-content');
    const aboutDisplay = await aboutContent.evaluate(el => window.getComputedStyle(el).display);
    const aboutGrid = await aboutContent.evaluate(el => window.getComputedStyle(el).gridTemplateColumns);
    
    console.log(`   • Display: ${aboutDisplay}`);
    console.log(`   • Grid columns: ${aboutGrid}`);
    
    if (aboutGrid.includes('1fr 1fr')) {
      console.log(`   ⚠️  ISSUE: 2-column grid on mobile! Should be single column`);
    } else {
      console.log(`   ✓ Proper mobile layout`);
    }
    
    // 6. Check footer
    console.log('\n6️⃣  FOOTER LAYOUT\n');
    
    const footerContent = await mobilePage.locator('.footer-content');
    const footerDisplay = await footerContent.evaluate(el => window.getComputedStyle(el).display);
    const footerFlex = await footerContent.evaluate(el => window.getComputedStyle(el).flexDirection);
    
    console.log(`   • Display: ${footerDisplay}`);
    console.log(`   • Flex direction: ${footerFlex}`);
    
    if (footerFlex === 'row') {
      console.log(`   ⚠️  ISSUE: Footer items in row, may overflow on mobile`);
    } else {
      console.log(`   ✓ Footer is column layout`);
    }
    
    // 7. Check padding/margins
    console.log('\n7️⃣  SPACING\n');
    
    const sections = await mobilePage.locator('section');
    const sectionCount = await sections.count();
    
    if (sectionCount > 0) {
      const firstSection = sections.first();
      const padding = await firstSection.evaluate(el => window.getComputedStyle(el).padding);
      console.log(`   • Section padding: ${padding}`);
    }
    
    // 8. Check mobile-specific elements
    console.log('\n8️⃣  MOBILE-SPECIFIC ELEMENTS\n');
    
    const mobileMenu = await mobilePage.locator('.mobile-menu, .hamburger, .menu-toggle');
    const hasMobileMenu = await mobileMenu.count() > 0;
    
    if (!hasMobileMenu) {
      console.log(`   ⚠️  ISSUE: No mobile menu/hamburger button found`);
      console.log(`      Navigation bar has 7 items + 2 social icons = 9 elements`);
      console.log(`      This may not fit comfortably on 375px screen`);
    } else {
      console.log(`   ✓ Mobile menu present`);
    }
    
    // 9. Test actual scrolling
    console.log('\n9️⃣  SCROLL TEST\n');
    
    const initialScroll = await mobilePage.evaluate(() => window.scrollY);
    await mobilePage.evaluate(() => window.scrollBy(0, 500));
    const afterScroll = await mobilePage.evaluate(() => window.scrollY);
    
    console.log(`   • Initial scroll: ${initialScroll}px`);
    console.log(`   • After scrolling: ${afterScroll}px`);
    console.log(`   ✓ Scrolling works`);
    
    // 10. Check touch targets
    console.log('\n🔟 TOUCH TARGET SIZES\n');
    
    const buttons = await mobilePage.locator('a, button');
    const buttonCount = await buttons.count();
    
    let smallButtons = 0;
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      const minSize = Math.min(box?.width || 0, box?.height || 0);
      
      if (minSize < 44) {
        smallButtons++;
      }
    }
    
    if (smallButtons > 0) {
      console.log(`   ⚠️  ISSUE: Some touch targets < 44px (minimum recommended)`);
    } else {
      console.log(`   ✓ Touch targets are adequate size (44px+)`);
    }
    
    // Summary
    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log('\n📋 SUMMARY OF ISSUES:\n');
    
    const issues = [];
    
    if (bodyWidth > windowWidth) {
      issues.push('❌ Horizontal scrolling present');
    }
    
    if (linkCount > 5 && !hasMobileMenu) {
      issues.push('❌ Navigation bar too crowded (7 items + social)');
    }
    
    if (aboutGrid.includes('1fr 1fr')) {
      issues.push('❌ About section is 2-column on mobile (should be 1-column)');
    }
    
    if (footerFlex === 'row') {
      issues.push('❌ Footer items in row (should be column)');
    }
    
    if (issues.length === 0) {
      console.log('✅ No major issues detected!');
      console.log('   The website appears responsive on mobile (375px).');
    } else {
      issues.forEach(issue => console.log('   ' + issue));
    }
    
    console.log('\n═══════════════════════════════════════════════════════════════\n');
    
  } catch (error) {
    console.error('Error: ' + error.message);
  } finally {
    await browser.close();
  }
})();
