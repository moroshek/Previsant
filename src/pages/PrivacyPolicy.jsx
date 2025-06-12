import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: June 2025
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Content */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or subscribe to our newsletter. This may include your name, email address, 
                  phone number, company information, and any messages you send to us.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information 
                  with trusted service providers who assist us in operating our business.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Previsant LLC</p>
                  <p className="text-gray-700">Email: privacy@previsant.com</p>
                  <p className="text-gray-700">Phone: (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy