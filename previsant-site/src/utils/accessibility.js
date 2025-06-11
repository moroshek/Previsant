// Accessibility utilities

// Skip to main content link
export const addSkipLink = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50'
  skipLink.textContent = 'Skip to main content'
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// Announce page changes for screen readers
export const announcePageChange = (title) => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', 'polite')
  announcement.className = 'sr-only'
  announcement.textContent = `Navigated to ${title}`
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Focus management for modals and overlays
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  )
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus()
          e.preventDefault()
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('close'))
    }
  })
}

// Check color contrast ratio
export const checkContrast = (foreground, background) => {
  // Convert hex to RGB
  const getRGB = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  // Calculate relative luminance
  const getLuminance = (rgb) => {
    const { r, g, b } = rgb
    const sRGB = [r, g, b].map(val => {
      val = val / 255
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    })
    return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722
  }

  const fg = getRGB(foreground)
  const bg = getRGB(background)
  
  if (!fg || !bg) return null

  const l1 = getLuminance(fg)
  const l2 = getLuminance(bg)
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)

  return {
    ratio: ratio.toFixed(2),
    passes: {
      AA: ratio >= 4.5,
      AAA: ratio >= 7,
      largeAA: ratio >= 3,
      largeAAA: ratio >= 4.5
    }
  }
}

// Add ARIA labels to interactive elements
export const ensureAccessibleButtons = () => {
  // Add aria-labels to icon-only buttons
  document.querySelectorAll('button').forEach(button => {
    if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
      const icon = button.querySelector('svg')
      if (icon) {
        const iconClass = icon.getAttribute('class') || ''
        if (iconClass.includes('menu')) button.setAttribute('aria-label', 'Menu')
        if (iconClass.includes('close')) button.setAttribute('aria-label', 'Close')
        if (iconClass.includes('search')) button.setAttribute('aria-label', 'Search')
      }
    }
  })
}