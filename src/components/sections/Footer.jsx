import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Shield, Linkedin, Twitter, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Data & Analytics Strategy', href: '/services' },
      { name: 'Insights as a Service', href: '/services' },
      { name: 'Industry Solutions', href: '/industries' },
      { name: 'Advisory & Mentoring', href: '/services' }
    ],
    industries: [
      { name: 'Healthcare', href: '/industries' },
      { name: 'Insurance', href: '/industries' },
      { name: 'Financial Services', href: '/industries' },
      { name: 'Case Studies', href: '/insights' }
    ],
    resources: [
      { name: 'Insights Blog', href: '/insights' },
      { name: 'Whitepapers', href: '/insights' },
      { name: 'Industry Reports', href: '/insights' },
      { name: 'Platform Overview', href: '/services' }
    ]
  }

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/previsant', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/previsant', name: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/previsant', name: 'Facebook' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">Previsant</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in data & analytics transformation. 
              Enabling organizations through their complete analytics journey from strategy to action.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button type="submit">
                  <Mail className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Previsant LLC. All rights reserved. | 
              <a href="/privacy-policy" className="hover:text-white ml-2">Privacy Policy</a> | 
              <a href="/terms-of-service" className="hover:text-white ml-2">Terms of Service</a>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer