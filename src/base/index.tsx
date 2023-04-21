import { Collapse } from 'antd'
import { Rect } from './rect'
import { Circle } from './circle'
import '../styles/base.css'

const { Panel } = Collapse

export function Base() {
  return (
    <div className="base-container">
      <Collapse defaultActiveKey={['rect', 'circle']}>
        <Panel header="Rect" key="rect">
          <Rect />
        </Panel>
        <Panel header="Circle Ellipse Wedge" key="circle">
          <Circle />
        </Panel>
        <Panel header="线" key="3">
          <p>3</p>
        </Panel>
      </Collapse>
    </div>
  )
}
