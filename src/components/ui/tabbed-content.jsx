import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TabbedContent = ({ 
  tabs, 
  variant = 'default',
  defaultTab = 0,
  className 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const tabVariants = {
    default: {
      button: "px-6 py-3 text-sm font-medium transition-all relative",
      active: "text-primary",
      inactive: "text-gray-600 hover:text-gray-900",
      indicator: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
    },
    pills: {
      button: "px-6 py-3 text-sm font-medium rounded-lg transition-all",
      active: "bg-primary text-white",
      inactive: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
      indicator: null
    },
    cards: {
      button: "p-4 text-left rounded-lg border-2 transition-all w-full",
      active: "border-primary bg-primary/5",
      inactive: "border-gray-200 hover:border-gray-300 bg-white",
      indicator: null
    }
  }

  const styles = tabVariants[variant]

  return (
    <div className={cn("", className)}>
      {/* Tab Headers */}
      <div className={cn(
        "flex",
        variant === 'cards' ? "flex-col md:flex-row gap-4" : "border-b border-gray-200"
      )}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              styles.button,
              activeTab === index ? styles.active : styles.inactive
            )}
          >
            {variant === 'cards' ? (
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{tab.label}</h4>
                {tab.description && (
                  <p className="text-sm text-gray-600">{tab.description}</p>
                )}
              </div>
            ) : (
              tab.label
            )}
            
            {variant === 'default' && activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className={styles.indicator}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export const VerticalTabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={cn("grid md:grid-cols-4 gap-8", className)}>
      {/* Sidebar */}
      <div className="md:col-span-1">
        <nav className="space-y-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3",
                activeTab === index
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 text-gray-700"
              )}
            >
              {tab.icon && (
                <span className={activeTab === index ? "text-white" : "text-gray-500"}>
                  {tab.icon}
                </span>
              )}
              <div>
                <div className="font-medium">{tab.label}</div>
                {tab.description && (
                  <div className={cn(
                    "text-sm",
                    activeTab === index ? "text-white/80" : "text-gray-500"
                  )}>
                    {tab.description}
                  </div>
                )}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="md:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {tabs[activeTab].title || tabs[activeTab].label}
            </h3>
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}