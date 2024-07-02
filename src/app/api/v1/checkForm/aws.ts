import { NextRequest, NextResponse } from 'next/server'
import AWS from 'aws-sdk'

export async function POST(req: NextRequest) {
  let { docType, source, target } = await req.json()

  source = source.split('base64,')[1]
  target = target.split('base64,')[1]

  const credentials = new AWS.SharedIniFileCredentials({
    profile: 'idsync'
  })
  AWS.config.credentials = credentials
  AWS.config.update({ region: 'us-east-1' })

  const client = new AWS.Rekognition()
  const params = {
    SourceImage: {
      Bytes: Buffer.from(decodeURIComponent(source), 'base64')
    },
    TargetImage: {
      Bytes: Buffer.from(decodeURIComponent(target), 'base64')
    },
    SimilarityThreshold: 70
  }
  let similarity: any = 0
  await new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, 5000)
    client.compareFaces(params, function (err, response) {
      console.log('------------- RESPONSE --------------')
      console.log(response)
      if (err) {
        console.log(err, err.stack) // an error occurred
        resolve()
      } else {
        response?.FaceMatches?.forEach((data) => {
          const position = data?.Face?.BoundingBox
          similarity = data.Similarity
          console.log(
            `The face at: ${position?.Left}, ${position?.Top} matches with ${similarity} % confidence`
          )
          resolve()
        }) // for response.faceDetails
      } // if
    })
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
