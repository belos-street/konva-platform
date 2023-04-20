import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument stage 舞台
 * @argument layer 图层
 * @argument rect 矩形
 */

export function Rect() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const rectAttr = {
      width: 50,
      height: 50,
      strokeWidth: 3,
      y: stage.height() / 2 - 50 / 2
    }

    const rect0 = new Konva.Rect({
      x: stage.width() / 2 - rectAttr.width * 2,
      fill: 'black',
      stroke: 'red',
      ...rectAttr
    })

    const rect1 = new Konva.Rect({
      x: stage.width() / 2 - rectAttr.width / 2,
      fill: 'red',
      stroke: 'black',
      ...rectAttr
    })

    const rect2 = new Konva.Rect({
      x: stage.width() / 2 + rectAttr.width,
      fill: 'black',
      stroke: 'red',
      ...rectAttr
    })

    layer.add(rect0)
    layer.add(rect1)
    layer.add(rect2)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-rect')!
    const stage = new Konva.Stage({
      container: 'canvas-rect',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-rect" className="container-box" />
}
