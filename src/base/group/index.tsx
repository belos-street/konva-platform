import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument Group 组
 */

export function Group() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const group = new Konva.Group({
      x: stage.width() / 2 - 80,
      y: stage.height() / 2 - 40,
      draggable: true
    })
    const colors = ['red', 'pink', 'green', 'orange']
    for (let i = 0; i < 4; i++) {
      group.add(
        new Konva.Rect({
          id: `rect${i}`,
          x: i * 20,
          y: i * 20,
          width: 150,
          height: 50,
          fill: colors[i],
          stroke: 'black',
          draggable: false
        })
      )
    }

    layer.add(group)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-group')!
    const stage = new Konva.Stage({
      container: 'canvas-group',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-group" className="container-box" />
}
