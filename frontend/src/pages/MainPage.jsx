import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Title from '../components/Title'

const MainPage = () => {
  window.scrollTo({ top: 0, left: 0 })

  return (
    <>
      <div>
        <div>
          <div>
            <Title lightText={'Todas tus '} darkText={'Picz'} />
          </div>
          <div className='bg-white m-3 p-6 rounded-lg shadow'>
            <div>
              <Link to='images'>
                <Button title={'Cargar Fotos'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
