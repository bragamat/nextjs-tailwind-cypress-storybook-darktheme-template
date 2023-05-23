export function AuthenticatedLayout({ children }: {
  children: React.ReactElement
}) {
  return (
    <main>
      <h1>Not Authenticated layout</h1>
      {children}
    </main >
  )
}
