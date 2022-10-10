import { useState } from 'react'

import './App.scss'

function App() {
  const avatarPlaceholder = 'https://via.placeholder.com/100?text=100%20x%20100'
  const bannerPlaceholder = 'https://via.placeholder.com/310x60?text=315%20x%2060'

  const [avatar, setAvatar] = useState(avatarPlaceholder)
  const [banner, setBanner] = useState(bannerPlaceholder)
  const [color, setColor] = useState('#555555')

  const copyHTML = () => {
    // TODO
  }

  return (
    <div className="App">
      <div className="App__container" id="simple-signature">
        <table style={{
          borderSpacing: 0,
          width: '320px'
        }}>
          <tbody>
            <tr>
              <td style={{
                overflow: 'hidden',
                paddingRight: '20px',
                width: '100px'
              }}>
                <img
                  src={avatar}
                  alt="avatar"
                  height={100}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
              </td>
              <td style={{
                fontFamily: 'Arial, sans-serif'
              }}>
                <p style={{
                  color,
                  fontSize: '18px',
                  fontWeight: 'bold',
                  margin: '0 0 8px 0'
                }}>
                  Lucho Web
                </p>

                <p style={{
                  color,
                  margin: '0 0 8px 0'
                }}>
                  Senior Developer
                </p>

                <p style={{
                  color,
                  margin: '0 0 8px 0'
                }}>
                  luchoweb.dev@gmail.com
                </p>

                <p style={{
                  color,
                  margin: '0 0 8px 0'
                }}>
                  +57 321 123 4567
                </p>

                <p style={{
                  color,
                  margin: 0
                }}>
                  luchoweb.dev
                </p>
              </td>
            </tr>

            <tr>
              <td
                colSpan={2} 
                style={{
                  padding: '20px 0',
                  textAlign: 'center'
                }}
              >
                <a href="#" style={{ marginRight: '10px' }}>
                  LKIN
                </a>

                <a href="#" style={{ marginRight: '10px' }}>
                  FB
                </a>

                <a href="#" style={{ marginRight: '10px' }}>
                  TW
                </a>
                
                <a href="#">
                  INSG
                </a>
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <img
                  src={banner}
                  alt="banner"
                  height={60}
                  width={320}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
