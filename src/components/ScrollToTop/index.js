import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ScrollToTopOnRouteChange() {
  const navigate = useNavigate()

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0)
    }
    return () => {
      unlisten()
    }
  }, [navigate])

  return null
}