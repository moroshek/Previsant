import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Accordion = ({ items, variant = 'default', allowMultiple = false, className }) => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  const isOpen = (index) => openItems.includes(index)

  if (variant === 'bordered') {
    return (
      <div className={cn("divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden", className)}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={isOpen(index)}
            onToggle={() => toggleItem(index)}
            variant="bordered"
          />
        ))}
      </div>
    )
  }

  if (variant === 'cards') {
    return (
      <div className={cn("space-y-4", className)}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <AccordionItem
              item={item}
              isOpen={isOpen(index)}
              onToggle={() => toggleItem(index)}
              variant="cards"
            />
          </motion.div>
        ))}
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={isOpen(index)}
          onToggle={() => toggleItem(index)}
          variant="default"
        />
      ))}
    </div>
  )
}

const AccordionItem = ({ item, isOpen, onToggle, variant }) => {
  const getIcon = () => {
    if (variant === 'cards') {
      return isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />
    }
    return (
      <ChevronDown 
        className={cn(
          "w-5 h-5 transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    )
  }

  const headerClass = {
    default: "flex items-center justify-between w-full py-4 text-left hover:text-primary transition-colors",
    bordered: "flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 transition-colors",
    cards: "flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
  }

  const contentClass = {
    default: "pb-4 text-gray-600",
    bordered: "px-4 pb-4 text-gray-600",
    cards: "px-6 pb-6 text-gray-600"
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className={headerClass[variant]}
      >
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          {item.subtitle && !isOpen && (
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          )}
        </div>
        <div className="text-primary">
          {getIcon()}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={contentClass[variant]}>
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQAccordion = ({ faqs, className }) => {
  const items = faqs.map(faq => ({
    title: faq.question,
    content: <p>{faq.answer}</p>
  }))

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our services
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion items={items} variant="bordered" allowMultiple />
      </div>
    </div>
  )
}