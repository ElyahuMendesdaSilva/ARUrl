export default function PrivateLayout({
    children 
}) {
    return (
        // Layout para páginas privadas, como o dashboard
        <main className="all">
            {children}
        </main>
    );
}