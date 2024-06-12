import './App.scss'
import { SectionList } from './SectionList'
import { NUTRITIONALPLAN } from './data'

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">Plano Alimentar - {NUTRITIONALPLAN.name}</div>
        </div>
      </nav>
      <main className='container-fluid h-100 pt-1 overflow-y-auto'>
        <SectionList />
      </main>
    </>
  )
}

export default App
