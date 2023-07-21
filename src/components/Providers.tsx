"use client"

import { ThemeProvider } from "next-themes"
import { type } from "os"
import { ReactNode } from "react"

export default function Providers ({children}: {children: ReactNode}) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	)
}
