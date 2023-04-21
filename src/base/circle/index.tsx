import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument circle 圆
 * @argument ellipse 椭圆
 * @argument wedge 楔形 - 可以用来画扇形
 */

export function Circle() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const circle = new Konva.Circle({
      x: stage.width() / 2 - 110,
      y: stage.height() / 2,
      fill: 'black',
      stroke: 'red',
      radius: 30, //半径
      draggable: true //可拖动
    })

    const ellipse = new Konva.Ellipse({
      x: stage.width() / 2,
      y: stage.height() / 2,
      fill: 'orange',
      stroke: 'gray',
      radiusX: 60, //确定椭圆的条件
      radiusY: 30 //确定椭圆的条件
    })

    const wedge = new Konva.Wedge({
      x: stage.width() / 2 + 100,
      y: stage.height() / 2 - 30,
      fill: 'green',
      stroke: 'black',
      radius: 60,
      angle: 90 //角度
    })

    layer.add(circle)
    layer.add(ellipse)
    layer.add(wedge)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-circle')!
    const stage = new Konva.Stage({
      container: 'canvas-circle',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-circle" className="container-box" />
}
