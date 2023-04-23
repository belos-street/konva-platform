import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument RegularPolygon 正多边形
 * @argument Arrow 箭头
 */

export function RegularPolygon() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const regularPolygon = new Konva.RegularPolygon({
      x: stage.width() / 2 - 40,
      y: stage.height() / 2,
      sides: 5, //边数
      radius: 80, //半径
      fill: 'red',
      stroke: 'black'
    })

    const arrow = new Konva.Arrow({
      x: stage.width() / 2 + 200,
      y: stage.height() / 2,
      points: [-100, -80, 60, 60, 80, -40], //坐标 x1，y1 x2 y2
      pointerLength: 10, //箭头长度
      pointerWidth: 10, //箭头宽度
      stroke: 'blue',
      fill: 'red'
    })

    layer.add(regularPolygon)
    layer.add(arrow)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-regularPolygon')!
    const stage = new Konva.Stage({
      container: 'canvas-regularPolygon',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-regularPolygon" className="container-box" />
}
