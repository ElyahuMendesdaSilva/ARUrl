export default function PublicLayout({
    children 
}) {
    return (
        // Layout para páginas públicas, como login e registro
        <main className="all">
            {children}
        </main>
    );
}