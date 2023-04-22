import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument text 文本
 * @argument TextPath 文本路径
 * @link http://konvajs-doc.bluehymn.com/docs/shapes/Text.html
 */

export function Text() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const text = new Konva.Text({
      x: stage.width() / 4 - 80,
      y: stage.height() / 2 - 20,
      text: 'Hello World!',
      fontSize: 40,
      fill: 'orange',
      fontFamily: 'Calibri'
    })

    const textPath = new Konva.TextPath({
      x: stage.width() / 2 - 80,
      y: stage.height() / 4,
      text: 'Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!',
      fontSize: 16,
      fill: 'green',
      fontFamily: 'Calibri',
      data: 'M10,10 C0,0 10,150 100,100 S300,150 4.0.180' //同svg路径 https://www.runoob.com/svg/svg-path.html
    })

    layer.add(text)
    layer.add(textPath)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-text')!
    const stage = new Konva.Stage({
      container: 'canvas-text',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-text" className="container-box" />
}
