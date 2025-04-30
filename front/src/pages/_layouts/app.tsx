import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'


export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <header>

      </header>
      <div className="ga-4 flex flex-1 flex-col p-8 pt-6">
      <div style={{ width: 250, background: '#f4f7f8', padding: 20 }}>
        <h2 style={{ fontWeight: 'bold' }}>MENU</h2>
        <Button style={{
          marginTop: 40,
          width: '100%',
          padding: 10,
          background: '#ddd',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Reset de senha
        </Button>
      </div>
        <Outlet />
      </div>
      <footer>Rodapé Aqui</footer>
    </div>
  )
}
