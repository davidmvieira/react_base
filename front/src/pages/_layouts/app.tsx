import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <header>Cabeçalho aqui</header>
      <div className="ga-4 flex flex-1 flex-col p-8 pt-6">
        <Outlet />
      </div>
      <footer>Rodapé Aqui</footer>
    </div>
  )
}
