import { useState } from 'react'
import { Button } from 'antd'
import { RollbackOutlined, ImportOutlined, ClearOutlined } from '@ant-design/icons'
export function Header() {
  return (
    <header className="p-header">
      <Button type="primary" icon={<RollbackOutlined />} size="small">
        Back
      </Button>
      <div>
        <Button className="hr--button__import" type="primary" icon={<ImportOutlined />} size="small">
          Import
        </Button>
        <Button type="primary" danger icon={<ClearOutlined />} size="small">
          Clear
        </Button>
      </div>
    </header>
  )
}
