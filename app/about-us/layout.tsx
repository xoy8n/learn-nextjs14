export const metadata = {
    title: 'About us'
}

export default function AboutUsLayout({children,}: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            &copy; {new Date().getFullYear()} by {new Date().getFullYear()}
        </div>
    )
}
