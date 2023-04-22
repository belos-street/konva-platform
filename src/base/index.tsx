import { Collapse } from 'antd'
import { Rect } from './rect'
import { Circle } from './circle'
import { Line } from './line'
import { Text } from './label'
import '../styles/base.css'

const { Panel } = Collapse

export function Base() {
  return (
    <div className="base-container">
      <Collapse defaultActiveKey={['rect', 'circle', 'line', 'text']}>
        <Panel header="Rect" key="rect">
          <Rect />
        </Panel>
        <Panel header="Circle Ellipse Wedge" key="circle">
          <Circle />
        </Panel>
        <Panel header="Line" key="line">
          <Line />
        </Panel>
        <Panel header="Text" key="text">
          <Text />
        </Panel>
      </Collapse>
    </div>
  )
}
