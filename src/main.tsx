import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './styles/index.css'
import { Button, Space } from 'antd'
import { Base } from './base'
import { Platform } from './platform'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Space direction="vertical">
              <NavLink to="/base">
                <Button type="link">Base</Button>
              </NavLink>
              <NavLink to="/platform">
                <Button type="link">Platform</Button>
              </NavLink>
            </Space>
          </>
        }
      />
      <Route path="/base" element={<Base />} />
      <Route path="/platform" element={<Platform />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
)
