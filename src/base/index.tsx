import { Collapse } from 'antd'
import { Rect } from './rect'
import { Circle } from './circle'
import { Line } from './line'
import { Text } from './text'
import { Ring } from './ring'
import { Label } from './label'
import { RegularPolygon } from './regular-polygon'
import { Image } from './image'
import { Group } from './group'
import '../styles/base.css'

const { Panel } = Collapse

export function Base() {
  return (
    <div className="base-container">
      <Collapse defaultActiveKey={[]}>
        <Panel header="Rect" key="rect">
          <Rect />
        </Panel>
        <Panel header="Circle Ellipse Wedge" key="circle">
          <Circle />
        </Panel>
        <Panel header="Line" key="line">
          <Line />
        </Panel>
        <Panel header="Text TextPath" key="text">
          <Text />
        </Panel>
        <Panel header="Ring Arc" key="ring">
          <Ring />
        </Panel>
        <Panel header="Label Tag" key="label">
          <Label />
        </Panel>
        <Panel header="RegularPolygon Arrow" key="regularPolygon">
          <RegularPolygon />
        </Panel>
        <Panel header="Image Animation" key="image">
          <Image />
        </Panel>
        <Panel header="Group" key="group">
          <Group />
        </Panel>
      </Collapse>
    </div>
  )
}
