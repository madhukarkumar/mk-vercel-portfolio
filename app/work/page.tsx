import { HeaderMenu } from '@/components/header-menu'
import { ThemeProvider } from '@/components/theme-provider'

export default function WorkPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <HeaderMenu />
        <div className="container mx-auto p-4 md:p-8 max-w-7xl">
          {/* Work content will go here */}
        </div>
      </div>
    </ThemeProvider>
  )
}