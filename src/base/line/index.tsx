import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument line 线
 */

export function Line() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const line = new Konva.Line({
      points: [50, 50, 100, 100, 200, 100, 250, 150], //[x1,y1, x2,y2....]
      stroke: 'red'
    })

    const line1 = new Konva.Line({
      points: [400, 50, 450, 100, 550, 100],
      stroke: 'orange',
      closed: true //是否闭合，如果闭合，则起点和终点相连接
    })

    const line2 = new Konva.Line({
      points: [700, 50, 750, 100, 850, 100],
      stroke: 'green',
      closed: true,
      tension: 0.2 //使线段弯曲 值越大，弯曲程度越深
    })

    const line3 = new Konva.Line({
      points: [1000, 50, 1050, 100, 1150, 100],
      fill: 'pink',
      closed: true
    })

    layer.add(line)
    layer.add(line1)
    layer.add(line2)
    layer.add(line3)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-line')!
    const stage = new Konva.Stage({
      container: 'canvas-line',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-line" className="container-box" />
}
