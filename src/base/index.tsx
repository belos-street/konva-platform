import { Collapse } from 'antd'
import { Rect } from './rect'
import '../styles/base.css'

const { Panel } = Collapse

export function Base() {
  return (
    <div className="base-container">
      <Collapse defaultActiveKey={['1']}>
        <Panel header="矩形 Rect" key="1">
          <Rect />
        </Panel>
        <Panel header="圆" key="2">
          <p>2</p>
        </Panel>
        <Panel header="线" key="3">
          <p>3</p>
        </Panel>
      </Collapse>
    </div>
  )
}
