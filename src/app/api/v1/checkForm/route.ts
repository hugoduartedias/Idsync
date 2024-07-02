import { NextRequest, NextResponse } from 'next/server'
import AWS from 'aws-sdk'
import { env } from 'node:process'
import prisma from '@/../db'

export async function POST(req: NextRequest) {
  let { docType, source, target, uuid } = await req.json()
  const { PORTALDEAPIS_APIKEY } = env

  source = source.split('base64,')[1]
  target = target.split('base64,')[1]

  const b64toBlob = (b64Data = '', contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data)
    const byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize)

      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }

      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }

    const blob = new Blob(byteArrays, { type: contentType })
    return blob
  }

  const formData = new FormData()
  // const bufferSource = Buffer.from(decodeURIComponent(source), 'base64')
  // const bufferTarget = Buffer.from(decodeURIComponent(target), 'base64')

  formData.append('face_a', b64toBlob(source))
  formData.append('face_b', b64toBlob(target))

  const response = await fetch('https://api.gw.cellereit.com.br/facematch', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + (PORTALDEAPIS_APIKEY as string)
    },
    body: formData
    //   JSON.stringify({
    //   face_a: source,
    //   face_b: target
    // })
  })

  const json = await response.json()
  const similarity = json?.result?.confiability

  const verification = await prisma.verification.findFirst({
    where: {
      uuid
    }
  })

  await prisma.verification.update({
    where: {
      id: verification?.id
    },
    data: {
      status: similarity >= 0.7 ? 'valid' : 'invalid'
    }
  })

  return NextResponse.json({
    docType,
    source,
    target,
    status: 'success',
    similarity
  })
}

export default function handler() { }
