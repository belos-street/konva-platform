import { useEffect } from 'react'
import Konva from 'konva'
import Img from '../../assets/react.svg'
import ViteLogo from '../../../public/vite.svg'
import { Stage } from 'konva/lib/Stage'

/**
 * @argument image 图片
 * @argument Animation 帧动画
 */

export function Image() {
  const draw = async (stage: Stage) => {
    const layer = new Konva.Layer()

    const loadUrl = (imgUrl: string): Promise<Konva.Image> =>
      new Promise((resolve) => {
        Konva.Image.fromURL(imgUrl, (image: Konva.Image) => {
          resolve(image)
        })
      })

    const image = await loadUrl(Img)
    image.setAttrs({
      x: stage.width() / 2 - 200,
      y: stage.height() / 2 - 20,
      scaleX: 2, // x轴拉伸倍数
      scaleY: 2 // y轴拉伸倍数
    })
    layer.add(image)

    const viteImg = await loadUrl(ViteLogo)
    viteImg.setAttrs({
      x: stage.width() / 2 + 200,
      y: stage.height() / 2 - 20,
      scaleX: 2, // x轴拉伸倍数
      scaleY: 2 // y轴拉伸倍数
    })
    layer.add(viteImg)

    /** 帧动画 */
    const amplitude = 40
    const period = 1000
    const centerY = stage.height() / 2 - 20
    const centerX = viteImg.x()
    const anim = new Konva.Animation(function (frame) {
      if (!frame) return
      image.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerY)
      viteImg.x(100 * Math.sin((frame.time * 2 * Math.PI) / period) + centerX)
    }, layer)

    anim.start()
    stage.add(layer)
  }

  const initCanvas = () => {
    const { clientWidth, clientHeight } = document.querySelector<HTMLCanvasElement>('#canvas-image')!
    const stage = new Konva.Stage({
      container: 'canvas-image',
      width: clientWidth,
      height: clientHeight
    })

    draw(stage)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return <div id="canvas-image" className="container-box" />
}
