import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument ring 圆环、环形
 * @argument arc 圆弧
 */

export function Ring() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const ring = new Konva.Ring({
      x: stage.width() / 4,
      y: stage.height() / 2,
      innerRadius: 50,
      outerRadius: 80,
      fill: 'orange'
    })

    const arc = new Konva.Arc({
      x: stage.width() / 2,
      y: stage.height() / 2,
      innerRadius: 70,
      outerRadius: 90,
      angle: 180, //角度
      rotation: -90, //旋转角度
      fill: 'blue'
    })

    layer.add(ring)
    layer.add(arc)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-ring')!
    const stage = new Konva.Stage({
      container: 'canvas-ring',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-ring" className="container-box" />
}
