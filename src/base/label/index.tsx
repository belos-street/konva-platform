import { useEffect } from 'react'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument label 展示文本
 * @argument tag 标签
 */

export function Label() {
  const draw = (stage: Stage) => {
    const layer = new Konva.Layer()

    const label = new Konva.Label({
      x: stage.width() / 2 + 40,
      y: stage.height() / 2
    })

    const tag = new Konva.Tag({
      fill: 'green',
      pointerDirection: 'down', //箭头朝向
      stroke: 'black',
      pointerHeight: 10, //箭头宽度
      pointerWidth: 10, //箭头高度
      shadowBlur: 20, //虚化程度 数值越大 虚化程度越高
      shadowOffsetX: 10, //虚化 x轴偏移
      shadowOffsetY: 10, //虚化 y轴偏移
      shadowColor: 'green'
    })

    const text = new Konva.Text({
      text: 'hello world ~',
      fontSize: 16,
      fill: 'orange',
      padding: 15 //内边距
    })

    label.add(tag)
    label.add(text)

    layer.add(label)
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-label')!
    const stage = new Konva.Stage({
      container: 'canvas-label',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-label" className="container-box" />
}
